import dotEnv from 'dotenv';

dotEnv.config();

import express from 'express';
import mongoose from 'mongoose';
import validate from 'express-validation';
import Youch from 'youch';

import databaseConfig from './config/database';
import routes from './routes';

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== 'production';

    this.database();
    this.middlewares();
    this.routes();
    this.exception();
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
    });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }

  exception() {
    this.express.use(async (error, req, res, next) => {
      if (error instanceof validate.ValidationError) {
        return res.status(error.status).json(error);
      }

      if (this.isDev) {
        const youch = new Youch(error, req);
        return res.json(await youch.toJSON());
      }

      return res.status(error.status || 500).json({ error: 'Internal Server Error!' });
    });
  }
}

export default new App().express;
