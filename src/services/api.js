import { BlizzAPI } from 'blizzapi';
// import { Buffer } from 'buffer';

export const api = new BlizzAPI({
  region: 'us',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

// export default async function useBlizzAuth() {
//   const blizzardID = process.env.CLIENT_ID;
//   const blizzardSecret = process.env.CLIENT_SECRET;
//   const auth = Buffer.from(`${blizzardID}:${blizzardSecret}`).toString(
//     'base64'
//   );
//   const tokenResponse = await fetch('https://us.battle.net/oauth/token', {
//     body: 'grant_type=client_credentials',
//     headers: {
//       Authorization: `Basic ${auth}`,
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     method: 'POST',
//   });
//   const accessBlizz = await tokenResponse.json();
//   return accessBlizz;
// }
//secrets
