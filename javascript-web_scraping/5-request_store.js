#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const file = process.argv[3];

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const fs = require('fs');

    fs.writeFile(file, body, 'utf-8', function (err) {
      if (err) {
        return console.log(err);
      }
    });
  }
});
