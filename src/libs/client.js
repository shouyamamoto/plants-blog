// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'plants-zukan',
  apiKey: process.env.API_KEY,
});