import { Route } from './core/route';
import { CategorizationController } from '../controllers/categorization/categorization';
import { HTTP_METHODS } from './core/methods';
import { Authenticate } from './../middleware/authenticate';

export const CATEGORIZATION_ROUTES: Array<any> = [
  new Route({
    url: '/api/categorization',
    middlewares: [new Authenticate()],
    method: HTTP_METHODS.GET,
    controller: CategorizationController.get,
  }),
  new Route({
    url: '/api/categorization',
    middlewares: [new Authenticate()],
    method: HTTP_METHODS.POST,
    controller: CategorizationController.create,
  }),
  new Route({
    url: '/api/categorization',
    middlewares: [new Authenticate()],
    method: HTTP_METHODS.UPDATE,
    controller: CategorizationController.update,
  }),
  new Route({
    url: '/api/categorization',
    middlewares: [new Authenticate()],
    method: HTTP_METHODS.DELETE,
    controller: CategorizationController.delete,
  }),
];
