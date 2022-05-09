import { api } from './api';

export async function fetchClasses() {
  const resp = await api.query('/data/wow/playable-class/index');
  const data = resp.json();
  return data;
}
export async function fetchClassById(id) {
  const resp = await api.query('/data/wow/playable-class/{id}');
  const data = resp.json();
  return data;
}
