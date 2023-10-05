const Persons = ({ personsToShow, deleteHandler }) => {
  return (
    <div>
      {personsToShow.map((person) => (
        <p key={person.name}>
          {person.name}=={person.number}{" "}
          <button
            onClick={() => {
              deleteHandler(person);
            }}
          >
            delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
