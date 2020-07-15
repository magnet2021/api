import { Token } from '../models/token';

export class Authenticate {
  public run(req, res, next): void {
    Token.findOne({ token: req.token }, (token) => {
      if (token) next();
      else res.boom.unauthorized();
    });
  }
}
