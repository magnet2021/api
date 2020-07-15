import { Request, Response } from 'express';
import { Categorization } from '../../models/categorization';

export const CategorizationController = {
  get: async (req: Request, res: Response) => {
    if (req.query.id) {
      Categorization.findOne({ _id: req.query.id }, (err, task) => {
        if (err) {
          res.boom.badImplementation(err);
        } else {
          res.json(task);
        }
      });
    } else {
      Categorization.find({}, (err, task) => {
        if (err) {
          res.boom.badImplementation(err);
        } else {
          res.json(task);
        }
      });
    }
  },

  create: (req: Request, res: Response) => {
    const {
      project,
      type,
      status,
      instruction,
      attachmentType,
      attachment,
      taximonies,
      urgency,
    } = req.body;

    const task = new Categorization({
      project,
      type,
      status,
      instruction,
      params: {
        attachmentType,
        attachment,
        taximonies: JSON.parse(taximonies),
      },
      urgency,
      response: {
        taximonies: {},
        comments: null,
      },
      completedAt: null,
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
    const {
      project,
      type,
      status,
      instruction,
      attachmentType,
      attachment,
      taximonies,
      urgency,
      response,
      completedAt,
    } = req.body;

    Categorization.findOneAndUpdate(
      { _id: req.body.id },
      {
        project,
        type,
        status,
        instruction,
        params: {
          attachmentType,
          attachment,
          taximonies: JSON.parse(taximonies),
        },
        urgency,
        response: JSON.parse(response),
        completedAt,
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
    Categorization.deleteOne({ _id: req.query.id }, (err) => {
      if (err) {
        res.boom.badImplementation(err);
      } else {
        res.json(true);
      }
    });
  },
};
