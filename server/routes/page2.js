'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.render('page2');
});

module.exports = {
  url: '/page2',
  route: router,
};
