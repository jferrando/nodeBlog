var request = require('supertest')
    , app   = require('../app.js')
    , assert= require('assert')
;	

describe('Blog API', function() {
  
  it('GET /posts should return 200',function(callback){
    request(app).get('/posts').expect(200,callback);
  })
  
});