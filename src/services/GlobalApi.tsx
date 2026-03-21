import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "7e45eed3674a00aaaa19710b454bde81";
// https://api.themoviedb.org/3/trending/all/day?api_key=7e45eed3674a00aaaa19710b454bde81

const globalApi = axios.create({
  baseURL: movieBaseUrl,
  params: {
    api_key: apiKey,
  },
});

const getTrendingVideos = async () => {
  try {
    const response = await globalApi.get("/trending/all/day?api_key=" + apiKey);
    return response.data;
  } catch (error) {
    console.error("Error fetching trending videos:", error);
    throw error;
  }
};

export default {
  getTrendingVideos,
};
