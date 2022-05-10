import { api } from './api';
const auth = process.env.ACCESS_TOKEN;

export async function fetchSpecById(id) {
  const resp = await api.query(
    `/data/wow/playable-specialization/${id}?namespace=static-us&locale=en_US&access_token=${auth}`
  );
  return resp;
}
