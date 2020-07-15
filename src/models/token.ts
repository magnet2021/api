import { Document, Schema, Model, model } from 'mongoose';
import { IToken } from '../interfaces/iToken';

export interface ITokenModel extends IToken, Document {
  toString(): string;
}

export let TokenModelSchema: Schema = new Schema(
  {
    token: { type: String, required: true },
  },
  { timestamps: true }
);

TokenModelSchema.methods.toString = (): string => {
  return JSON.stringify(this);
};

export const Token: Model<ITokenModel> = model<ITokenModel>('Token', TokenModelSchema);
