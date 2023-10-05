import axios from "axios";

const getAllPersons = () => {
  const request = axios.get("http://localhost:3001/persons");
  return request.then((resp) => resp.data);
};

const addPerson = (person) => {
  const request = axios.post("http://localhost:3001/persons", person);
  return request.then((resp) => resp.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`http://localhost:3001/persons/${id}`);

  return request.then((resp) => resp.data);
};

const updatePerson = (id, person) => {
  const request = axios.put(`http://localhost:3001/persons/${id}`, person);
  return request.then((resp) => resp.data);
};

export { getAllPersons, addPerson, deletePerson, updatePerson };
