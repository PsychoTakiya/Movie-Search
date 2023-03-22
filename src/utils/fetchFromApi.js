import axios from "axios";

// export const BASE_URL = "https://anime-db.p.rapidapi.com";

// const options = {
//   headers: {
//     "X-RapidAPI-Key": "f0654e9207msh61012bc978717f0p1d095djsnb6d446429421",
//     "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
//   },
// };

export const BASE_URL = "https://advanced-movie-search.p.rapidapi.com/search";

const options = {
  params: { page: "1" },
  headers: {
    "X-RapidAPI-Key": "f0654e9207msh61012bc978717f0p1d095djsnb6d446429421",
    "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
