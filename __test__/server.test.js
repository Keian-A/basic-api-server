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

  // ALL THE TESTS FOR THE FOOD ROUTE
  test('testing a 200 for GET `/food`', async () => {
    const response = await request.get('/food');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });

  test('testing a 200 for POST `/food`', async () => {
    const response = await request.post('/food').send({
      name: 'test',
      calories: 100
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
  });

  test('testing a 200 for GET `/food/:foodId`', async () => {
    const response = await request.get(`/food/1`);
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
  });

  test('testing a 200 for PUT `/food/:foodId`', async () => {
    const response = await request.put('/food/1').send({
      name: 'new test',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('new test');
  });

  test('testing a 200 for DELETE `/food/:foodId`', async () => {
    const response = await request.delete('/food/1');
    expect(response.status).toEqual(204);
  });

  // ALL TESTS FOR CAR ROUTE
  test('testing a 200 for GET `/car`', async () => {
    const response = await request.get('/car');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });

  test('testing a 200 for POST `/car`', async () => {
    const response = await request.post('/car').send({
      name: 'test',
      calories: 100
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
  });

  test('testing a 200 for GET `/car/:carId`', async () => {
    const response = await request.get(`/car/1`);
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
  });

  test('testing a 200 for PUT `/car/:carId`', async () => {
    const response = await request.put('/car/1').send({
      name: 'new test',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('new test');
  });

  test('testing a 200 for DELETE `/car/:carId`', async () => {
    const response = await request.delete('/car/1');
    expect(response.status).toEqual(204);
  });
});