const express = require('express');

const getUserInfo = require('./lib/utilities.js').getUserInfo;

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/api/whoami/', function (req, res) {
  const output = getUserInfo(req);

  res.send(output);
});

app.get('*', function (req, res) {
  res.redirect('/api/whoami');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
})