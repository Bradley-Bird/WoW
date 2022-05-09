import { BlizzAPI } from 'blizzapi';

export const api = new BlizzAPI({
  region: 'us',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});
