import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const avrage = (good * 1 + neutral * 0 + bad * -1) / total;

  const handleClick = (setItem, item) => {
    setItem(item + 1);
  };

  return (
    <div>
      <h1>give a feedback</h1>
      <button onClick={() => handleClick(setGood, good)}>good</button>
      <button onClick={() => handleClick(setNeutral, neutral)}>nutral</button>
      <button onClick={() => handleClick(setBad, bad)}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>avrage {avrage}</p>
      <p>positive {(good * 100) / total}</p>
    </div>
  );
};

export default App;
