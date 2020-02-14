const LexicalService = {
  getAllCurrentlyReading(knex) {
    return knex.select('*').from('currently_reading');
  },

  getUserInfo(knex, userLogin) {
    return knex.select('*').from('profiles').where({user_login: userLogin.user_login}).first();
  },

  getById(knex, id) {
    return knex.from('currently_reading').select('*').where('id', id).first();
  },

  addNewCurrentlyReading(knex, newItem) {
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
    return knex
      .insert(newUser)
      .into('profiles')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },

  updateUser(knex, user_login, userToUpdate) {
    return knex('profiles')
      .where( { user_login })
      .update(userToUpdate);
  }
};


module.exports = LexicalService;