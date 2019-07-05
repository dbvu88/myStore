/* eslint-disable no-undef */
import request from 'supertest';
import app from '../src/app';

// eslint-disable-next-line no-undef
describe('GET /', () => {
  test('should response 200', () => request(app)
    .get('/')
    .expect(200));
});

describe('GET users/get', () => {
  test('should reponse with json', () => request(app)
    .get('/users')
    .expect('Content-Type', /json/));

  test('should reponse with a collection of users', () => request(app)
    .get('/users')
    .then((res) => {
      expect(res.body.length).toBeGreaterThan(0);
      expect(res.body[0].password).toBeUndefined();
    }));
});

describe('POST auth/register', () => {
  test('should response 200', () => request(app)
    .post('/auth/register')
    .send({
      username: 'duc',
      pasword: '123',
    })
    .expect(200));
});

// it('will check the matchers and pass', () => {
//     const user = {
//         createdAt: new Date(),
//         id: Math.floor(Math.random() * 20),
//         name: 'LeBron James',
//     };

//     expect(user).toMatchSnapshot({
//         createdAt: expect.any(Date),
//         id: expect.any(Number),
//     });
// });

// // Snapshot
// exports[`will check the matchers and pass 1`] = `
//   Object {
//     "createdAt": Any<Date>,
//     "id": Any<Number>,
//     "name": "LeBron James",
//   }
//   `;

