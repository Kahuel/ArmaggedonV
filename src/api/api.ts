import axios from "axios";

export const getAsteroids = async (date: string) => {
  const response = await axios({
    method: "GET",
    url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=T2On9LH3qcCSunNBko6Sr7MIgiN0zdNiBWWGUajA`,
  });
  return response;
};

export const getAsteroidInfo = async (id: string) => {
  const response = await axios({
    method: "GET",
    url: `http://www.neowsapp.com/rest/v1/neo/${id}?api_key=T2On9LH3qcCSunNBko6Sr7MIgiN0zdNiBWWGUajA`,
  });
  return response;
};
