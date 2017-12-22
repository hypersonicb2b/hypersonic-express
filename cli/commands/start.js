'use strict';

const Command = require('cmnd').Command;

class StartCommand extends Command {

  constructor() {

    super('start');

  }

  help() {

    return {
      description: 'Starts your Hypersonic-Express Server'
    };

  }

  run(params, callback) {

    let spawn = require('cross-spawn-async');
    let child = spawn('npm',  ['start'], {stdio: 'inherit'});

    process.on('exit', function() {
      child && child.kill();
    });

  }

}

module.exports = StartCommand;
