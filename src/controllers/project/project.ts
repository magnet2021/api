import { Request, Response } from 'express';
import { Project } from '../../schemas/project';
import { generate } from '../../utils/token';

export const ProjectController = {
  get: async (req: Request, res: Response) => {
    Project.findOne({ _id: req.query.id }, (err, task) => {
      if (err) {
        res.boom.badImplementation(err);
      } else {
        res.json(task);
      }
    });
  },

  create: (req: Request, res: Response) => {
    const { name, type, authorID } = req.body;

    const task = new Project({
      name,
      type,
      authorID,
      token: null,
      tasks: null,
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
    const { name, type, authorID, token, tasks } = req.body;

    Project.findOneAndUpdate(
      { _id: req.body.id },
      {
        name,
        type,
        authorID,
        token,
        tasks,
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
    Project.deleteOne({ _id: req.query.id }, (err) => {
      if (err) {
        res.boom.badImplementation(err);
      } else {
        res.json(true);
      }
    });
  },
};
