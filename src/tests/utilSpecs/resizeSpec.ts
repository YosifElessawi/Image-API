import supertest from 'supertest';
import app from '../../index';
import path from 'path';
import fs from 'fs';

let imagebuffer: Buffer;
const promise = fs.promises.readFile(
  path.join('src/tests/utilSpecs/fjord_200_200.jpg')
);

Promise.resolve(promise).then(function (buffer) {
  imagebuffer = Buffer.from(buffer);
});

const request = supertest(app);
const testurl = '/api/resize?filename=fjord&width=200&height=200';

describe('Resize Test', () => {
  it('Check the image  resize process', async () => {
    const response = await request.get(testurl);
    expect(response.body).toEqual(imagebuffer);
  });
});
