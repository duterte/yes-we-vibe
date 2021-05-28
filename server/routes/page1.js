'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.render('page1');
});

module.exports = {
  url: '/',
  route: router,
};
