import { Document, Schema, Model, model } from 'mongoose';
import { IProject } from '../interfaces/iProject';

export interface IProjectModel extends IProject, Document {
  toString(): string;
}

export let ProjectModelSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    authorID: { type: String, required: true },
    token: { type: String, required: false },
    tasks: { type: String, required: false },
  },
  { timestamps: true }
);

ProjectModelSchema.methods.toString = (): string => {
  return JSON.stringify(this);
};

export const Project: Model<IProjectModel> = model<IProjectModel>('Project', ProjectModelSchema);
