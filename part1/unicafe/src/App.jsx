import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const avrage = (good * 1 + neutral * 0 + bad * -1) / total;
  const positive = (good * 100) / total;

  const handleClick = (setItem, item) => {
    setItem(item + 1);
  };

  return (
    <div>
      <h1>give a feedback</h1>
      <Button handleClick={() => handleClick(setGood, good)} name="good" />
      <Button
        handleClick={() => handleClick(setNeutral, neutral)}
        name="neutral"
      />
      <Button handleClick={() => handleClick(setBad, bad)} name="bad" />

      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        avrage={avrage}
        positive={positive}
      />
    </div>
  );
};

export default App;
