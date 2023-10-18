import express from 'express';

import { kycController } from '../../controller/kyc';

const kycRouter = express.Router();

kycRouter.get('/accessToken', kycController.accessToken);

export { kycRouter };
