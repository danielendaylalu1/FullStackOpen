import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
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
      setPersons(persons.concat(nameObject));
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
  return (
    <div>
      <h2>Phonebook</h2>
      {/* filter shown with <input value={filter} onChange={handleFilter} /> */}
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>Add a new</h2>
      {/* <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
          <br />
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> */}
      <PersonForm
        addName={addName}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <p key={person.name}>
          {person.name}=={person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
