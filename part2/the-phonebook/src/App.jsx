import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useEffect } from "react";
import { getAllPersons, addPerson, updatePerson } from "./services/persons";
import { deletePerson } from "./services/persons";
import Message from "./components/Message";
import "./index.css";
// import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);
  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.trim())
  );

  const addName = (e) => {
    e.preventDefault();
    console.log(e.target);
    if (
      persons.find((person) => person.name === newName) &&
      persons.find((person) => person.number === newNumber)
    ) {
      alert(`${newName} is already added to phonebook`);
    } else if (persons.find((person) => person.name === newName)) {
      const updatedPerson = persons.find((person) => person.name === newName);
      const text = `${updatedPerson.name} is already added to phonebook, replace the old number with the new one ?`;
      if (confirm(text) === true) {
        const personObject = { ...updatedPerson, number: newNumber };
        updatePerson(updatedPerson.id, personObject).then((data) => {
          setPersons(
            persons.map((person) =>
              person.id !== personObject.id ? person : data
            )
          );
        });
        setMessage(`Old number is changed to ${newNumber}`);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    } else {
      const nameObject = {
        name: newName.trim(),
        number: newNumber.trim(),
        id: persons.length + 1,
      };
      // setPersons(persons.concat(nameObject));
      addPerson(nameObject).then((data) => setPersons(persons.concat(data)));
      setMessage(`Added ${newName}`);
      setTimeout(() => {
        setMessage(null);
      }, 3000);
      setNewName("");
      setNewNumber("");
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

  const deleteHandler = (person) => {
    const text = `Delete ${person.name} ?`;
    if (confirm(text) === true) {
      deletePerson(person.id).then(() => {
        const deletedPerson = persons.find((item) => item.id === person.id);
        setPersons(persons.filter((person) => person.id !== deletedPerson.id));
      });
    } else {
      return;
    }
  };

  useEffect(() => {
    getAllPersons().then((data) => setPersons(data));
  }, []);
  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message} />
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

      <Persons
        personsToShow={personsToShow}
        setPersons={setPersons}
        persons={persons}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};

export default App;
