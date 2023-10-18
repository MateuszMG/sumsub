import { Request, Response } from 'express';

import { sumsubAxios } from '../utils/sumsub/sumsubAxios';
import { createAccessToken } from '../utils/sumsub/sumsubConfigs';

export const kycController = {
  accessToken: async (req: Request, res: Response) => {
    try {
      const externalUserId =
        'randomToken-' + Math.random().toString().slice(2, 9);

      const tokenRes = await sumsubAxios(createAccessToken(externalUserId));
      const data = tokenRes.data;

      res.status(200).json({ data });
    } catch (error: any) {
      res.status(400).json({ msg: 'Something went wrong...' });
    }
  },
};
