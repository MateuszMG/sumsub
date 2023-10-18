import axios from 'axios';

import { config } from '../../config/config';

import { createSignature } from './sumsubConfigs';

const { SUMSUB_APP_TOKEN, SUMSUB_BASE_URL } = config;

export const sumsubAxios = axios.create({
  baseURL: SUMSUB_BASE_URL,
  headers: {
    'X-App-Token': SUMSUB_APP_TOKEN,
  },
});

sumsubAxios.interceptors.request.use(createSignature);
