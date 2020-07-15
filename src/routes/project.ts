import { Route } from './core/route';
import { ProjectController } from '../controllers/project/project';
import { HTTP_METHODS } from './core/methods';
import { Authenticate } from './../middleware/authenticate';

export const PROJECT_ROUTES: Array<any> = [
  new Route({
    url: '/api/project',
    middlewares: [new Authenticate()],
    method: HTTP_METHODS.GET,
    controller: ProjectController.get,
  }),
  new Route({
    url: '/api/project',
    middlewares: [new Authenticate()],
    method: HTTP_METHODS.POST,
    controller: ProjectController.create,
  }),
  new Route({
    url: '/api/project',
    middlewares: [new Authenticate()],
    method: HTTP_METHODS.UPDATE,
    controller: ProjectController.update,
  }),
  new Route({
    url: '/api/project',
    middlewares: [new Authenticate()],
    method: HTTP_METHODS.DELETE,
    controller: ProjectController.delete,
  }),
];
