import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint', () => {
  it('Get the /api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
  it('Get the /resize endpoint', async () => {
    const response = await request.get('/api/resize');
    expect(response.status).toBe(200);
  });
});
