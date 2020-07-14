export abstract class Middleware {
  public canActivate(req, res, next): void {}
}
