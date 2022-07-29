import { RequestHandler } from 'express';

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('this is users.js');
  next();
} as RequestHandler);

router.get('/xxx', function (req, res, next) {
  res.send('this is users.js and router is xxx');
  next();
} as RequestHandler);

module.exports = router;
