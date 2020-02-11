const CurrentlyReadingArray = require ('../src/fixtures');

const LexicalService = {
  getAllCurrentlyReading(knex) {
    return knex.select('*').from('currently_reading');
  }
};


module.exports = LexicalService;