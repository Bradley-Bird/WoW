import { api } from './api';
const auth = process.env.ACCESS_TOKEN;

export async function fetchClasses() {
  const resp = await api.query('/data/wow/playable-class/index');
  const data = resp.json();
  return data;
}
export async function fetchClassById(id) {
  const resp = await api.query(
    `/data/wow/playable-class/${id}?namespace=static-us&locale=en_US&access_token=${auth}`
  );
  //   console.log(resp);
  return resp;
}

export async function fetchClassMediaById(id) {
  const resp = await api.query(
    `/data/wow/media/playable-class/${id}?namespace=static-us&locale=en_US&access_token=${auth}`
  );
  return resp;
}
