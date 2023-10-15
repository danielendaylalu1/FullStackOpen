const PersonForm = ({
  addName,
  newName,
  handleNewName,
  newNumber,
  handleNewNumber,
  setProccessing,
}) => {
  return (
    <form
      onSubmit={(e) => {
        setProccessing("proccessing....");
        addName(e);
      }}
    >
      <div>
        name: <input value={newName} onChange={handleNewName} />
        <br />
        number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
