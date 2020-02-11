const path = require('path');
const express = require('express');
const xss = require('xss');
const LexicalService = require('./lexical-service');
const lexicalRouter = express.Router();
const jsonParser = express.json();

lexicalRouter
  .route('/')
  .get((req, res, next) => {
    LexicalService.getAllCurrentlyReading(
      req.app.get('db')
    )
      .then(items => {
        res.json(items);
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    console.log(req.body);
    const { current_progress = 50, date_started, media_name, media_type, author='none', media_url='none', notes='none' } = req.body;  

    const newItem = { current_progress, date_started, media_name, media_type };

    LexicalService.addNewCurrentlyReading(
      req.app.get('db'),
      newItem
    )
      .then(item => {
        res
          .status(201)
          .json(item);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    const { currently_id } = req.params;
    LexicalService.deleteItem(
      req.app.get('db'),
      currently_id
    )
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next)
  });

module.exports = lexicalRouter;
