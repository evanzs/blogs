import express, { Response, Request, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import ErrorsHandler from '@shared/errors/ErrorsHandler';

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof ErrorsHandler) {
      response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({ status: error, message: error.message });
  },
);

app.listen(3030, () => {
  console.log('Server started port 3030');
});
