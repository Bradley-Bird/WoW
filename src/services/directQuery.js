export async function fetchClasses() {
  const resp = await fetch(
    `https://us.api.blizzard.com/data/wow/playable-class/index?namespace=static-us&locale=en_US&access_token=${process.env.ACCESS_TOKEN}`
  );
  const data = resp.json();
  return data;
}
