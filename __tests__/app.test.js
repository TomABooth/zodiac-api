const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../lib/zodiacs-data');

describe('zodiacs routes', () => {
  it('/zodiacs should return a list of zodiacs', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });
  it('/zodiacs/:id should return zodiac detail', async () => {
    const res = await request(app).get('/zodiacs/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
    };
    expect(res.body).toEqual(aquarius);
  });
});
