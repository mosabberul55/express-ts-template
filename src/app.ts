import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from "helmet";
import cors from 'cors';


dotenv.config();

const app: Application = express();
app.use(cors()); // Use the cors middleware with your options
// Express Middlewares
app.use(helmet());
app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use(express.json());
app.use(bodyParser.json());

// Root Route
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Welcome to Typescript Node.js Server Setup Guide!!!' });
});

// server Health Check
app.get('/health-check', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Server is up and running!' });
});

export default app;