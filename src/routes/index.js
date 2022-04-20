const express = require('express');
const users = require('./userRoutes.js');

const routes = app => {
  app.route('/').get((req, res) =>
    res.status(200).send({ message: "API Login and Register User" }));

  app.use(
    express.json(),
    users
  )
}

module.exports = routes;  