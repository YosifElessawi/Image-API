import express from 'express';
import resize from './api/resize';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
  res.send('Main api route');
});
routes.use('/resize', resize);

export default routes;
