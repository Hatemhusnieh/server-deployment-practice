'use strict';
const express = require('express');
const app = express();
const notFound = require('./error-handlers/404');
const anError = require('./error-handlers/500');

app.get('/', (req, res) =>{
  res.status(200).send('Either You get RICH, or DIE trying');
});

app.get('/bad', (req, res) =>{
  throw new Error('you went south buddy!');
});

app.use('*', notFound);
app.use(anError);

const start = (port) =>{
  app.listen(port, () => console.log(`server starts at ${port}`));
};

module.exports = {
  app,
  start,
};