#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const films = JSON.parse(body).results;
    let count = 0;
    let character;
    for (let i = 0; i < films.length; i++) {
      character = films[i].characters;
      character.forEach(element => {
        if (element.search('/18/') > 0) {
          count += 1;
        }
      });
    }
    console.log(count);
  }
});
