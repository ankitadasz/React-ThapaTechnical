import axios from "axios";

export const API = axios.create({
  baseURL: "https://countries-api.davegarvey.workers.dev",
});

export const getCountryData = () => {
  return API.get("/countries");
};

export const getCountryIndData = (code) => {
  return API.get(`/countries/${code}`);
};