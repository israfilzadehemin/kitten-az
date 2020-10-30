import axios from "axios";

export const getAllBreeds = (page = 0, size = 10) => {
  return axios.get(`/api/1.0/breeds?current=${page}&size=${size}`);
};

export const getBreedsByLetter = (letter) => {
  return axios.get(`/api/1.0/breeds/startswith?letter=${letter}`);
};

export const getBreedById = (id) => {
  return axios.get(`/api/1.0/breeds/${id}`);
};

export const getAllContacts = () => {
  return axios.get(`/api/1.0/contacts`);
};