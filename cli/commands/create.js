'use strict';

const Command = require('cmnd').Command;
const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');
const inflect = require('i')();
const colors = require('colors/safe');
const async = require('async');
const http = require('http');
const sh = require('shelljs');

const EventEmitter = require('events').EventEmitter;
const util = require('util');

//supress shell output
sh.config.silent = true;


const CreateCommand = (() => {

  function promptUserForProjectInfo (params) {
    this.data = {
      name: params.args[0] ? (params.args[0] + '').replace(/_/g, ' ') : '',
      author: (params.vflags.author || '').replace(/_/g, ' ') || '',
      ignoreOutput: params.vflags.hasOwnProperty('ignore-output')
    };

    let questions = [];

    !this.data.name && questions.push({
      name: 'project-name',
      type: 'input',
      default: 'hypersonic-express-project',
      message: 'Name',
    });

    !this.data.author && questions.push({
      name: 'author',
      type: 'input',
      default: 'code author',
      message: 'Author',
    });

    return inquirer.prompt(questions)
    .then((info) => {
      let name = info['project-name'] || this.data.name;
      let simpleName = name.replace(/\s/gi, '-');

      return Object.assign({}, info, {
        name: name,
        author: info.author || this.data.author,
        simpleName: simpleName,
        databaseName: inflect.underscore(simpleName),
        version: this.version
      })
    })
  }

  function createDirectoryStructure (info) {
    this.emit('start');
    const dirname = info.name.replace(/[^A-Za-z0-9-_]/gi, '-').toLowerCase();
    const targetDirectory = `./${dirname}`

    if (fs.existsSync(targetDirectory)) {
      throw new Error(`Directory ${dirname} already exists, try a different project name`);
    }else{
      console.log(`Creating directory ${dirname}`);
      console.log('');

      fs.mkdirSync(targetDirectory);

      console.log('Copying directory structure and files...');
      console.log('');

      return fs.copy(this.rootPath + '/../../src', targetDirectory)
      .then(() => {
         return Object.assign({}, info, {targetDirectory, dirname})
      })
    }
  }

  function copyTemplates (info) {
    let dot = require('dot');
    dot.templateSettings.strip = false;
    dot.templateSettings.varname = 'data';

    const templates = ['package.json', 'README.md', 'app/server.js'];
    const templatesDir = `${this.rootPath}/../templates`

    let templateActions = templates.map((template) => {
      let content = fs.readFileSync(`${templatesDir}/${template}.jst`).toString()
      let rendered = dot.template(content)(info)
      return fs.outputFile(`${info.targetDirectory}/${template}`, rendered)
    })

    return Promise.all(templateActions)
    .then(() => {
      return info;
    })

  }

  function finalizeInstall(info) {

    console.log('Finalizing install...');
    console.log('');

    console.log('Installing node modules with npm install...this could take a while');
    return new Promise((resolve, reject) => {
      sh.pushd(info.targetDirectory);
      if (sh.exec('npm install').code !== 0) {
        sh.echo('Warning: npm install failed; You can always manually run npm install');
      }
      sh.popd();
      resolve(info);
    })
  }

  class CreateCommand extends Command {

    constructor() {

      super('create');

      EventEmitter.call(this);

      this.data = {};
      this.rootPath = path.resolve(__dirname);
      this.version = require('../../package.json').version;

    }

    help() {
      return {
        description: 'Initialize the current directory as a new hypersonic-express project'
      };
    }

    run(params, callback) {
      if (fs.existsSync('./.hypersonic-config')) {
        callback('Hypersonic-Express project already exists in this directory');
      }

      const getUserPrompts = promptUserForProjectInfo.bind(this);
      const initDirectory = createDirectoryStructure.bind(this);
      const copyDefaultTemplates = copyTemplates.bind(this);

      getUserPrompts(params)
      .then(initDirectory)
      .then(copyDefaultTemplates)
      .then(finalizeInstall)
      .then((info) => {
        if (!this.data.ignoreOutput) {
          console.log('');
          console.log(colors.bold.green('All done!'));
          console.log('');
          console.log('Your new Hypersonic-Express project, ' + colors.bold(info.name) + ', is ready to go!');
          console.log('');
          console.log(colors.bold('Final step: ') + 'Start your server by typing:');
          console.log('');
          console.log('  cd ' + info.dirname + ' && hypersonic start');
          console.log('');
        }
      })
      .catch((err) => {
        console.log (colors.bold.red('Error:: ', err.message));
      })
    }
  }

  util.inherits(CreateCommand, EventEmitter);

  return CreateCommand;
})();

module.exports = CreateCommand;