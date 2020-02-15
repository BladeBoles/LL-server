const path = require('path');
const express = require('express');
const xss = require('xss');
const LexicalService = require('./lexical-service');
const lexicalRouter = express.Router();
const jsonParser = express.json();

lexicalRouter
  .route('/currently-reading')
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
    const { current_progress = 50, date_started, media_name, media_type, author='', media_url='', notes='', finished, library_owner } = req.body;  

    const newItem = { current_progress, date_started, media_name, media_type, author, media_url, notes, finished, library_owner };

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
  });

lexicalRouter
  .route('/currently-reading/:currently_id')
  .delete((req, res, next) => {
    const { currently_id } = req.params;
    LexicalService.deleteItem(
      req.app.get('db'),
      currently_id
    )
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);
  })
  .patch(jsonParser,(req, res, next) => {
    const { currently_id } = req.params;
    const { current_progress, date_started, media_name, media_type, author='', media_url='', notes='', finished } = req.body;  

    const updatedItem = { current_progress, date_started, media_name, media_type, author, media_url, notes, finished };

    LexicalService.updateItem(
      req.app.get('db'),
      currently_id,
      updatedItem
    )
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);
  });
  
lexicalRouter
  .route('/new-user')
  .post(jsonParser, (req, res, next) => {
    const { firstname, lastname, email, user_login, user_password } = req.body;  

    const newUser = { firstname, lastname, email, user_login, user_password };

    LexicalService.addNewUser(
      req.app.get('db'),
      newUser
    )
      .then(item => {
        res
          .status(201)
          .json(item);
      })
      .catch(next);
  });

lexicalRouter
  .route('/login/:user_login')
  .get((req, res, next) => {
    const user_login = req.params;
    LexicalService.getUserInfo(
      req.app.get('db'),
      user_login
    )
      .then(items => {
        res.send(items);
      })
      .catch(next);
  })

  .patch(jsonParser, (req, res, next) => {
    const { weekly_hours, progress, days_left } = req.body;
    const profileToUpdate = { weekly_hours, progress, days_left };
    const numberOfValues = Object.values(profileToUpdate).filter(Boolean).length;

    if(numberOfValues === 0) {
      return res.status(400).json({
        error: {
          message: `Request body must contain weekly_hours`
        }
      });
    }

    LexicalService.updateUser(
      req.app.get('db'),
      req.params.user_login,
      profileToUpdate
    )
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);

  });


module.exports = lexicalRouter;
