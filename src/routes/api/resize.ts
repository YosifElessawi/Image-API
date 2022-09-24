import { Router, Request, Response } from 'express';
import resize from '../../util/resize';
import validaterequest from '../../util/vald';
import { query } from 'express-validator';

const routes = Router();
// validation chain of constraints to check
const validationchain = [
  query('filename')
    .exists({ checkFalsy: true })
    .isString()
    .withMessage('Wrong input please try again'),
  query('width')
    .exists({ checkFalsy: true })
    .isInt()
    .withMessage('Wrong input check width!'),
  query('height')
    .exists({ checkFalsy: true })
    .isInt()
    .withMessage('Wrong input check height!'),
];
//endpoint plus middleware
routes.get(
  '/',
  validationchain,
  validaterequest,
  resize.checkIfFileExist,
  resize.resizefunc,
  (req: Request, res: Response) => {
    res.send('Error in processing the image!');
  }
);

export default routes;
