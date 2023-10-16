export const fetchData = async (limit: number) => {
  const url: string = "https://restcountries.com/v2/all";
  const response = await fetch(url);
  const data = await response.json();
  data.length = limit;

  return data;
};

export const fetchCountry = async (name: string) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchRegion = async (name: string) => {
  const url = `https://restcountries.com/v3.1/region/${name}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
