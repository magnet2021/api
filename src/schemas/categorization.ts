import { Document, Schema, Model, model } from 'mongoose';
import { ICategorization } from '../interfaces/iCategorization';

export interface ICategorizationModel extends ICategorization, Document {
  toString(): string;
}

export let CategorizationModelSchema: Schema = new Schema(
  {
    project: { type: String, required: true },
    type: { type: String, required: true },
    status: { type: String, required: true },
    instruction: { type: String, required: true },
    params: {
      attachmentType: { type: String, required: true },
      attachment: { type: String, required: true },
      taximonies: { type: Object, required: true },
    },
    urgency: { type: String, required: true },
    response: {
      taxonomies: { type: String, required: false },
      comments: { type: String, required: false },
    },
    completedAt: { type: String, required: false },
  },
  { timestamps: true }
);

CategorizationModelSchema.methods.toString = function(): string {
  return JSON.stringify(this);
};

export const Categorization: Model<ICategorizationModel> = model<ICategorizationModel>(
  'Categorization',
  CategorizationModelSchema
);
