'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
var fs = require('fs');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'It\'s da ' + chalk.red('generator-lightning') + ' component generator yo!'
    ));

    var prompts = [{
      type: 'input',
      name: 'userInput',
      message: 'What is the name of your component?'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.userInput;

      done();
    }.bind(this));
  },


  writing: function () {

    console.log('Can you feel it?');

    mkdirp.sync(this.props.userInput);

    this.fs.copyTpl(
      this.templatePath('component/controller.js'),
      this.destinationPath(this.props.userInput + '/' + this.props.userInput + 'Ctrl.js'),
      { title: this.props.userInput }
    );

    this.fs.copyTpl(
      this.templatePath('component/directive.js'),
      this.destinationPath(this.props.userInput + '/' + this.props.userInput + 'Dir.js'),
      { title: this.props.userInput }
    );

    this.fs.copyTpl(
      this.templatePath('component/index.js'),
      this.destinationPath(this.props.userInput + '/index.js'),
      { title: this.props.userInput }
    );

    this.fs.copyTpl(
      this.templatePath('component/template.html'),
      this.destinationPath(this.props.userInput + '/' + this.props.userInput + '.html'),
      { title: this.props.userInput }
    );
  },

  install: function () {
    this.installDependencies();
  }
});
