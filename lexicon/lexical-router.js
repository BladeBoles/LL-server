const path = require('path');
const express = require('express');
const xss = require('xss');
const LexicalService = require('./lexical-service');
const lexicalRouter = express.Router();
const bodyParser = express.json();

lexicalRouter
  .route('/')
  .get((req, res, next) => {
    // 
    return console.log('That worked');
  });