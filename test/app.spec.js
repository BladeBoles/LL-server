const knex = require('knex');
const fixtures = require('./test-fixtures');
const app = require('../src/app');


describe('currently-reading Endpoints', () => {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL
    });
    app.set('db', db);
  });

  const dummyUsers = fixtures.makeUserArray();
  const dummyData =  fixtures.makeLibraryArray();

  after('disconnect from db', () => db.destroy());

  before('clean the table', () => db('currently_reading').truncate());

  afterEach('cleanup', () => db('currently_reading').truncate());

  describe('GET /api/currently-reading', () => {
    
    context(`With an empty CR database`, () => {
      it('responds with 200 and an empty list', () => {
        return supertest(app)
          .get('/api/currently-reading')
          .expect(200, []);
      });
    });

    context('With dummy values in CR database', () => {
      

      beforeEach('inserting data', () => {
        return db
          .into('profiles')
          .insert(dummyUsers)
          .into('currently_reading')
          .insert(dummyData);
      });

      it('responds with dummy data', () => {
        return supertest(app)
          .get('/api/currently-reading')
          .expect(200, dummyData);
      });
    });
  });

  describe('POST /api/currently-reading', () => {

    const newItem = {
      "media_name": "Diabeetus",
      "author": "Willy Bolus",
      "media_url": "https://www.ffaker.com",
      "current_progress": 109,
      "notes": "I have it",
      "finished": false,
      "media_type": "other",
      "date_started": "2004-10-10T00:00:00.000Z",
      "date_finished": null,
    };

    beforeEach('inserting data', () => {
      return db
        .into('profiles')
        .insert(dummyUsers);
    });

    it('adds the new item to currently-reading table', () => {
      return supertest(app)
        .post('/api/currently-reading')
        .send(newItem)
        .expect(201)
        .expect(res => {
          const {media_name, author, media_url, current_progress, notes, finished, media_type, date_started, date_finished } = res.body;
          expect(media_name).to.eql(newItem.media_name);
          expect(author).to.eql(newItem.author);
          expect(media_url).to.eql(newItem.media_url);
          expect(current_progress).to.eql(newItem.current_progress);
          expect(notes).to.eql(newItem.notes);
          expect(finished).to.eql(newItem.finished);
          expect(media_type).to.eql(newItem.media_type);
          expect(date_started).to.eql(newItem.date_started);
          expect(date_finished).to.eql(newItem.date_finished);
        });
    });
  });

  describe('PATCH /api/currently-reading/:currently_id', () => {
    context('given there are items in the CR database', () => {
      beforeEach('inserting data', () => {
        return db
          .into('profiles')
          .insert(dummyUsers)
          .into('currently_reading')
          .insert(dummyData);
      });

      it('responds with 204 and updates the CR item', () => {
        const currently_id = 2;
        const updatedItem = {
          media_name: 'Just not the same',
          author: 'Jiljo Jaggins III'
        };
        return supertest(app)
          .patch(`/api/currently-reading/${currently_id}`)
          .send(updatedItem)
          .expect(204);
      });
    });
  });

  describe('DELETE /api/currently-reading/:currently_id', () => {
    context('given there are items in the CR database', () => {
      beforeEach('inserting data', () => {
        return db
          .into('profiles')
          .insert(dummyUsers)
          .into('currently_reading')
          .insert(dummyData);
      });

      it('DELETES that punk outta there!', () => {
        const currently_id = 2;
        
        return supertest(app)
          .delete(`/api/currently-reading/${currently_id}`)
          .expect(204);
      });
    });
  });
});

describe('profiles Endpoints', () => {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL
    });
    app.set('db', db);
  });

  const dummyUsers = fixtures.makeUserArray();
  
  after('disconnect from db', () => db.destroy());

  describe('GET /api/login/:user_login', () => {
    
    context(`When searching a false user_login`, () => {
      const fake_user_login = 'fakeuser';
      
      it('responds with 200 and an empty return', () => {
        return supertest(app)
          .get(`/api/login/${fake_user_login}`)
          .expect(200, '');
      });
    });

    context('When searching a real user login', () => {
      const real_user_login = 'fred';

      beforeEach('inserting data', () => {
        return db
          .into('profiles')
          .insert(dummyUsers);
      });

      it('responds with profile data', () => {
        dummyUsers[0].id = 1;
        return supertest(app)
          .get(`/api/login/${real_user_login}`)
          .expect(200, dummyUsers[0]);
      });
    });
  });

  describe('PATCH /login/:user_login', () => {
    const real_user_login = 'fred';
    const updatedUser = {
      weekly_hours: 10,
      progress: 180,
      days_left: 3
    };

    it('patches the user profile and returns 204', () => {
      return supertest(app)
        .patch(`/api/login/${real_user_login}`)
        .send(updatedUser)
        .expect(204);
    });
  });

  describe('POST /api/new-user', () => {
    const newUser = {
      user_login: "NewGuy",
      user_password: "shhh"
    };

    return supertest(app)
      .post(`/api/new-user`)
      .send(newUser)
      .expect(201);
  });

  

});