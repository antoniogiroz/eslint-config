import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import createError from 'http-errors';
import logger from 'morgan';
import errorHandler from './middleware/errorHandler';
import indexRouter from './routes';

const app = express();

app.use(helmet()); // https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(createError.NotFound());
});

// pass any unhandled errors to the error handler
app.use(errorHandler);

export default app;