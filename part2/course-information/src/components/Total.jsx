const Total = ({ parts }) => {
  const total = parts.reduce((t, part) => {
    return t + part.exercises;
  }, 0);
  return <h4>total of {total} exercises</h4>;
};

export default Total;
