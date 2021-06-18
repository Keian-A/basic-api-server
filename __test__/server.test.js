'use strict';

const server = require('../src/server.js');
const data = require('../src/models/index.js');
const supertest = require('supertest');

const request = supertest(server.app);

beforeAll(async () => {
  // creates tables from models
  await data.db.sync();
});
afterAll(async () => {
  // remove all created data entities and delete the table.
  await data.db.drop();
});

describe('testing the server', () => {

  // ALL THE TESTS FOR THE PEOPLE ROUTE
  test('testing a 200 for GET `/people`', async () => {
    const response = await request.get('/people');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toEqual(true);
  });

  test('testing a 200 for POST `/people`', async () => {
    const response = await request.post('/people').send({
      firstName: 'test',
      lastName: 'test',
    });
    expect(response.status).toEqual(200);
    expect(response.body.firstName).toEqual('test');
    expect(response.body.lastName).toEqual('test');
  });

  test('testing a 200 for GET `/people/:peopleId`', async () => {
    const response = await request.get(`/people/1`);
    expect(response.status).toEqual(200);
    expect(response.body.firstName).toEqual('test');
  });

  // test('testing a 200 for PUT `/people/:peopleId`', async () => {
  //   const response = await request.put('/people/1').send({
  //     firstName: 'new test',
  //   });
  //   expect(response.status).toEqual(200);
  //   expect(response.body.firstName).toEqual('new test');
  // });

  // test('testing a 204 for DELETE `/people/:peopleId`', async () => {
  //   const response = await request.delete('/people/1');
  //   expect(response.status).toEqual(204);
  // });

  // ALL TESTS FOR CLOTHES ROUTE
  test('testing a 200 for GET `/clothes`', async () => {
    const response = await request.get('/clothes');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toEqual(true);
  });

  test('testing a 200 for POST `/clothes`', async () => {
    const response = await request.post('/clothes').send({
      clothing: 'test',
    });
    expect(response.status).toEqual(200);
    expect(response.body.clothing).toEqual('test');
  });

  test('testing a 200 for GET `/clothes/:clothesId`', async () => {
    const response = await request.get(`/clothes/1`);
    expect(response.status).toEqual(200);
    expect(response.body.clothing).toEqual('test');
  });

  test('testing a 200 for PUT `/clothes/:clothesId`', async () => {
    const response = await request.put('/clothes/1').send({
      clothing: 'new test',
    });
    expect(response.status).toEqual(200);
    expect(response.body.clothing).toEqual('new test');
  });

  // test('testing a 204 for DELETE `/clothes/:clothesId`', async () => {
  //   await request.delete('/clothes/1');
  //   const testingVar = await request.get(`/clothes/1`);
  //   expect(testingVar).toEqual(false);
  // });
});