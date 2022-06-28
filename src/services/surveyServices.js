import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/mariacuadroszm/test-api/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getRatingSurvey() {
    return apiClient.get("/ratingValues");
  },
};
