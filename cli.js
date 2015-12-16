#!/usr/bin/env node
'use strict';
var inquirer = require("inquirer");
var writeFile = require("fs").writeFile;

var questions = [
  {
    type: "input",
    name: "name",
    message: "What's the name of your webapp?",
    validate: function( value ) {
      if (value) {
        return true;
      } else {
        return "What's the name of your webapp?";
      }
    }
  },
  {
    type: "input",
    name: "short_name",
    message: "Short name?",
    validate: function( value ) {
      if (value) {
        return true;
      } else {
        return "Short name?";
      }
    }
  },
  {
    type: "input",
    name: "background_color",
    message: "Background color?",
    validate: function( value ) {
      if (value) {
        return true;
      } else {
        return "Background color?";
      }
    }
  },
  {
    type: "input",
    name: "theme_color",
    message: "Theme color?",
    validate: function( value ) {
      if (value) {
        return true;
      } else {
        return "Theme color?";
      }
    }
  },
  {
    type: "input",
    name: "start_url",
    message: "Start URL?",
    validate: function( value ) {
      if (value) {
        return true;
      } else {
        return "Start URL?";
      }
    }
  },
  {
    type: "list",
    name: "orientation",
    message: "Select the orientation:",
    choices: [ "None", "portrait", "landscape" ],
    filter: function( val ) { return val.toLowerCase(); }
  },
  {
    type: "list",
    name: "fullscreen",
    message: "Select the fullscreen mode:",
    choices: [ "Standalone", "Complete FullScreen", "As in browser" ],
    filter: function( val ) { return val.toLowerCase(); }
  }
];

inquirer.prompt( questions, function( answers ) {
  answers["icons"] = [{
        "src": "images/touch/icon-128x128.png",
        "sizes": "128x128",
        "type": "image/png"
      }, {
        "src": "images/touch/apple-touch-icon.png",
        "sizes": "152x152",
        "type": "image/png"
      }, {
        "src": "images/touch/ms-touch-icon-144x144-precomposed.png",
        "sizes": "144x144",
        "type": "image/png"
      }, {
        "src": "images/touch/chrome-touch-icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      }];

  writeFile(`${__dirname}/manifest.json`, JSON.stringify(answers, null, 4), function(err) {
      if(err) {
        console.error(err);
      } else {
        console.log("Created a manifest.json in your cwd!");
      }
  });

});

