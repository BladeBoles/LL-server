/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const knex = require('knex');
const lexicalService = require('../lexicon/lexical-service');
const lexicalRouter = require('../lexicon/lexical-router');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

const testGet = [
  {
    "media_name": "Moby Dick",
    "current_progress": 360,
    "finished": false,
    "media_type": "Book",
    "date_started": "02-03-20",
    "date_finished": "",
    "author": "Herman Melville",
    "url": "https://en.wikipedia.org/wiki/Moby-Dick",
    "notes": "A real whale of a tale."
  },
  {
    "media_name": "Little Women",
    "current_progress": 180,
    "finished": false,
    "media_type": "Audiobook",
    "date_started": "10-31-19",
    "date_finished": "",
    "author": "Louisa May Alcott",
    "url": "https://en.wikipedia.org/wiki/Little-Women",
    "notes": "Was the movie better than the book?"
  },
  {
    "media_name": "How Much Sleep Do You Need?",
    "current_progress": 15,
    "finished": false,
    "media_type": "Article",
    "date_started": "02-09-20",
    "date_finished": "",
    "author": "Willie Nelson",
    "url": "https://www.groovytunes.com/sleep",
    "notes": "Six hours isn't enough for anyone!"
  }
];

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/api/currently-reading', (req, res) => {
  res.json(testGet);
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (process.env.NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});
  
module.exports = app;
