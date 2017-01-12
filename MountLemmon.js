#!/usr/bin/env nodejs

// Dependencies
var spawn = require('child_process').spawn;
var express = require('express');
var bodyParser = require('body-parser');

// Create an express web app
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Handle Admin Command requests
app.get('/', function(request, response) {
  // Our server process
  var mountLemmonWebcamPull = spawn('sh', ['get-summit.sh']);

  // Log server output to stdout
  function log(data) {
      process.stdout.write(data.toString());
  }
  mountLemmonWebcamPull.stdout.on('data', log);
  mountLemmonWebcamPull.stderr.on('data', log);

  mountLemmonWebcamPull.on('close', (code) => {
    var fs = require('fs')
      , filename = '/home/thehappyginger/Public/summit/listjpg.txt';
    fs.readFile(filename, 'utf8', function(err, data) {
      if (err) throw err;
      console.log('OK: ' + filename);
      console.log(data)
    });
  });
});

// Listen for incoming HTTP requests on port 3003
app.listen(3004);

// Make sure the Minecraft server dies with this process
process.on('exit', function() {
    mountLemmonWebcamPull.kill();
});
