import { Route } from './core/route';
import { TokenController } from '../controllers/token/token';
import { HTTP_METHODS } from './core/methods';

export const TOKEN_ROUTES: Array<any> = [
  new Route({
    url: '/api/token',
    middlewares: [],
    method: HTTP_METHODS.GET,
    controller: TokenController.get,
  }),
  new Route({
    url: '/api/token',
    middlewares: [],
    method: HTTP_METHODS.POST,
    controller: TokenController.create,
  }),
  new Route({
    url: '/api/token',
    middlewares: [],
    method: HTTP_METHODS.UPDATE,
    controller: TokenController.update,
  }),
  new Route({
    url: '/api/token',
    middlewares: [],
    method: HTTP_METHODS.DELETE,
    controller: TokenController.delete,
  }),
];
