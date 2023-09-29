const Part = ({ part }) => {
  console.log(part);
  return (
    <tr>
      <td>{part.name}</td>
      <td>{part.exercises}</td>
    </tr>
  );
};

export default Part;
