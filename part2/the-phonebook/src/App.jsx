import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useEffect } from "react";
import { getAllPersons, addPerson } from "./services/persons";
// import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.trim())
  );

  const addName = (e) => {
    e.preventDefault();
    console.log(e.target);
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const nameObject = {
        name: newName.trim(),
        number: newNumber.trim(),
        id: persons.length + 1,
      };
      // setPersons(persons.concat(nameObject));
      addPerson(nameObject).then((data) => setPersons(persons.concat(data)));
    }
  };
  const handleNewName = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };
  const handleNewNumber = (e) => {
    console.log(e.target.value);
    setNewNumber(e.target.value);
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    getAllPersons().then((data) => setPersons(data));
  }, []);
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>Add a new</h2>

      <PersonForm
        addName={addName}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>

      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
