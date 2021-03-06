import dotenv from 'dotenv';

dotenv.config();

export const environment = {
  port: process.env.PORT,
  mongoURL: process.env.MONGO_URL,
};
