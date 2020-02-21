const knex = require('knex');
const fixtures = require('./test-fixtures');
const app = require('../src/app');
const lexicalRouter = require('../lexicon/lexical-router');


describe('currently-reading Endpoints', () => {
  let db

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('clean the table', () => db('currently_reading').truncate())

  


  // before('cleanup', () => db('lexicon-test').truncate())

  afterEach('cleanup', () => db('currently_reading').truncate())

  describe('GET /api/currently-reading', () => {
    
    context(`With an empty CR database`, () => {
      it('responds with 200 and an empty list', () => {
        return supertest(app)
          .get('/api/currently-reading')
          .expect(200, [])
      })
    })

    context('With dummy values in CR database', () => {
      const dummyUsers = fixtures.makeUserArray();
      const dummyData =  fixtures.makeLibraryArray();

      beforeEach('inserting data', () => {
        return db
          .into('profiles')
          .insert(dummyUsers)
          .into('currently_reading')
          .insert(dummyData)
      })

      it('responds with dummy data', () => {
        return supertest(app)
          .get('/api/currently-reading')
          .expect(200, dummyData)
      })
    })
  })

  describe('POST /api/currently-reading')
  

});