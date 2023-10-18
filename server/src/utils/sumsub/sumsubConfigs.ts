import { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import crypto from 'crypto';

import { config } from '../../config/config';

const { SUMSUB_SECRET_KEY } = config;

const levelName = 'basic-kyc-level';
const ttlInSecs = 900;

export const createSignature = (config: InternalAxiosRequestConfig<any>) => {
  const ts = Math.floor(Date.now() / 1000);

  const signature = crypto.createHmac('sha256', SUMSUB_SECRET_KEY);
  signature.update(ts + config.method! + config.url);

  config.headers['X-App-Access-Ts'] = ts;
  config.headers['X-App-Access-Sig'] = signature.digest('hex');

  return config;
};

export const createAccessToken = (externalUserId: string) => {
  const url =
    '/resources/accessTokens?userId=' +
    encodeURIComponent(externalUserId) +
    '&ttlInSecs=' +
    ttlInSecs +
    '&levelName=' +
    encodeURIComponent(levelName);

  const config: AxiosRequestConfig = {
    method: 'POST',
    url,
  };

  return config;
};
