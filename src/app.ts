import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://portfoliopanel-joy.vercel.app',
  'https://goursahajoy.vercel.app',
  'https://joy.vertoone.com'
];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);
// parser
app.use(express.json());
app.use(cookieParser());

// application routes
app.use('/api', router);

// test api
app.get('/', (req: Request, res: Response) => {
  res.send('server is up and running!');
});

// global error handler
app.use(globalErrorHandler);

// not found
app.use(notFound);

export default app;
