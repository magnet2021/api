import { Request, Response } from 'express';
import { Token } from '../../models/token';
import { generate } from '../../utils/generateToken';

export const TokenController = {
  get: async (req: Request, res: Response) => {
    Token.findOne({ _id: req.query.id }, (err, task) => {
      if (err) {
        res.boom.badImplementation(err);
      } else {
        res.json(task);
      }
    });
  },

  create: (req: Request, res: Response) => {
    const task = new Token({
      token: generate(),
    });

    task.save((err) => {
      if (err) {
        res.boom.badRequest(err);
      } else {
        res.json(task);
      }
    });
  },

  update: (req: Request, res: Response) => {
    Token.findOneAndUpdate(
      { _id: req.body.id },
      {
        token: generate(),
      },
      (err) => {
        if (err) {
          res.boom.badImplementation(err);
        } else {
          res.json(true);
        }
      }
    );
  },

  delete: (req: Request, res: Response) => {
    Token.deleteOne({ _id: req.query.id }, (err) => {
      if (err) {
        res.boom.badImplementation(err);
      } else {
        res.json(true);
      }
    });
  },
};
