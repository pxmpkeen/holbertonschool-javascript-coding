#!/usr/bin/node

// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'request';

request(process.argv[2], (err, response, body) => {
  if (err) throw err;
  // eslint-disable-next-line no-param-reassign
  body = JSON.parse(body);

  let result = body.reduce((x, y) => {
    // eslint-disable-next-line no-param-reassign
    if (!x[y.userId]) x[y.userId] = 0;
    // eslint-disable-next-line no-param-reassign
    if (y.completed) x[y.userId] += 1;
    return x;
  }, {});

  result = Object.fromEntries(Object.entries(result).filter(([, value]) => value > 0));

  console.log(result);
});
