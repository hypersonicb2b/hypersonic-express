[![HypersonicB2B](https://www.hypersonicb2b.com/static/images/HypersonicB2B.png)](https://www.hypersonicb2b.com/overview)

# HypersonicB2B web application framework based on Express

[![Coverage Status](https://coveralls.io/repos/github/hypersonicb2b/hypersonic-express/badge.svg?branch=master)](https://coveralls.io/github/hypersonicb2b/hypersonic-express?branch=master) [![Join the chat at https://gitter.im/newtriks/hypersonic-express](https://badges.gitter.im/newtriks/hypersonic-express.svg)](https://gitter.im/newtriks/hypersonic-express?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Build Status](https://secure.travis-ci.org/hypersonicb2b/hypersonic-express.png?branch=master)](https://travis-ci.org/hypersonicb2b/hypersonic-express) ![Amount of Downloads per month](https://img.shields.io/npm/dm/hypersonic-express.svg "Amount of Downloads") ![Dependency Tracker](https://img.shields.io/david/hypersonicb2b/hypersonic-express.svg "Dependency Tracker") ![Dependency Tracker](https://img.shields.io/david/dev/hypersonicb2b/hypersonic-express.svg "Dependency Tracker") ![Node Version](https://img.shields.io/node/v/hypersonic-express.svg "Node Version")

> Somewhat opinionated framework for fullstack nodejs development
> Custom built on top of [NodeJS](https://nodejs.org/en/) | [Express](https://expressjs.com) | [ReactJS](http://facebook.github.io/react/) | 
> Modern web tools include: [Webpack](http://webpack.github.io), [Babel](http://babeljs.io) and [Browsersync](http://www.browsersync.io).


Out of the box it comes with support for:
- [x] React
- [x] Redux
- [x] React Router
- [x] React Router Redux
- [x] Babel (ES2015 via Babel-Loader)
- [x] PostCSS (Style transformations)
- [x] Less
- [x] Scss
- [x] Sass
- [x] Stylus
- [x] Webpack
- [x] Unit tests via Karma and Mocha/Chai
- [x] Automatic code linting via esLint
- [x] React component testing via Jest

## Requirements
This project is written in ES2015. This means it is ___not compatible with node.js versions before 4.0___.

---

## Installation
```bash
# Make sure to install globally
npm install -g hypersonic-express
```

## Getting Started/Setting up projects
```bash
# Using terminal navigate to your default projects folder. i.e. `cd ~/code`.
# Run the commandline
hypersonic create
```

Please make sure to edit your newly generated `package.json` file to set description, author information and the like.


# Server side development


# Client side development
## Generating new components
```bash
# After initial setup
# cd my-new-project
hypersonic -g component my/namespaced/components/name
```


