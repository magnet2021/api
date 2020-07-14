import { Express } from 'express';
import bodyParser from 'body-parser';
import boom from 'express-boom';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import token from 'express-bearer-token';
import ratelimit from 'express-rate-limit';
import helmet from 'helmet';

export const coreMiddlewares = [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  boom(),
  cors({ origin: '*' }),
  compression(),
  morgan('dev'),
  token(),
  ratelimit({
    windowMs: 10000,
    max: 10,
  }),
  helmet(),
];

export class Kernel {
  public static registerCoreMiddlewares(app: Express) {
    coreMiddlewares.forEach((middleware) => {
      app.use(middleware);
    });
  }
}
