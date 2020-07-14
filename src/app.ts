import express from 'express';
import mongoose from 'mongoose';
import { Router } from './routes/core/router';
import { Kernel } from './middleware/kernel';
import { environment } from './environment/dev';

mongoose.connect(environment.mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const app = express();

Kernel.registerCoreMiddlewares(app);
Router.registerRoutes(app);

app.listen(environment.port, (err) => {
  if (err) return console.error(err);
  return console.log(`Launched app on port ${environment.port}`);
});
