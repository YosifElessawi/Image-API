import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);
const testurl = '/api/resize?filename=&width=200&height=200';
const testresult = ['filename Error Invalid value'];

describe('Validation Test', () => {
  it('Check if validation work', async () => {
    const response = await request.get(testurl);
    expect(response.body).toEqual(testresult);
  });
});
