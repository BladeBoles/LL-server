const LexicalService = {
  getAllCurrentlyReading(knex) {
    return knex.select('*').from('currently_reading');
  },

  getById(knex, id) {
    return knex.from('currently_reading').select('*').where('id', id).first();
  },

  addNewCurrentlyReading(knex, newItem) {
    console.log(newItem);
    return knex
      .insert(newItem)
      .into('currently_reading')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },

  deleteItem(knex, id) {
    return knex('currently_reading')
      .where({ id })
      .delete();
  },

  addNewUser(knex, newUser) {
    console.log(newUser);
    return knex
      .insert(newUser)
      .into('profiles')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  }
};


module.exports = LexicalService;