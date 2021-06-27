'use strict';
const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe('server', () =>{
  it('right path/route', async () =>{
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });
  it('handle nonexistent routes ', async () =>{
    const response = await request.get('/yoo');
    expect(response.status).toEqual(404);
  });
  it('handles errors', async () =>{
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });
});

