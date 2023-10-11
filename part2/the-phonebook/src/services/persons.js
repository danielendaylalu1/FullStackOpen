import axios from "axios";

const url = import.meta.env.VITE_SERVER_URL;

const getAllPersons = () => {
  const request = axios.get(url);
  return request.then((resp) => resp.data);
};

const addPerson = (person) => {
  const request = axios.post(url, person);
  return request.then((resp) => resp.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${url}/${id}`);

  return request.then((resp) => resp.data);
};

const updatePerson = (id, person) => {
  const request = axios.put(`${url}/${id}`, person);
  return request.then((resp) => resp.data);
};

export { getAllPersons, addPerson, deletePerson, updatePerson };
