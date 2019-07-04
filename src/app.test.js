/* eslint-disable no-undef */
import request from 'supertest';
import app from './app';

// eslint-disable-next-line no-undef
describe('the rootpath', () => {
  test('should response with status 200', () => request(app)
    .get('/')
    .expect(200));
});

describe('the POST auth/register route', () => {
  test('should response with the hashed pass', () => request(app)
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
