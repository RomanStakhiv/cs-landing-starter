import * as https from 'https';

import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BE_HOST_URL}/api/v1/`,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

module.exports = api;
