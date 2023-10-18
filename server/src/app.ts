import cors from 'cors';
import express from 'express';

import { kycRouter } from './routes/api/kyc';

const app = express();

app.use(cors({ origin: true }));
app.use('/api', kycRouter);

export { app };
