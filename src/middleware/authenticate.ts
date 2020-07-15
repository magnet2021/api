import { Token } from '../models/token';

export abstract class Authenticate {
  public canActivate(req, res, next): void {
    Token.findOne({ token: req.token }, (token) => {
      if (token) next();
      else res.boom.unauthorized();
    });
  }
}
