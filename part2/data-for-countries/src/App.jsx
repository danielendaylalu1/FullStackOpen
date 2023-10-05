import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [shown, setShown] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((resp) => {
        console.log(resp.data);
        setCountries(resp.data);
      });
  }, []);

  return (
    <div>
      <form>
        <span>Find countries</span>
        <input
          onChange={(e) => {
            setDisplay(false);
            setShown(
              countries.filter((country) => {
                return country.name.common
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase().trim());
              })
            );
            console.log(shown);
          }}
        />
      </form>
      {shown.length > 10 ? (
        <p>Too many matches, specify filter</p>
      ) : shown.length === 1 ? (
        <div>
          <h2>{shown[0].name.common}</h2>
          <p>capital {shown[0].capital[0]}</p>
          <p>area {shown[0].area}</p>
          <h2>Languages</h2>
          {Object.keys(shown[0].languages).map((key) => {
            return <p key={key}>{shown[0].languages[key]}</p>;
          })}
          <h1>{shown[0].flag}</h1>
        </div>
      ) : (
        shown.map((item) => {
          return (
            <div key={item.name.common}>
              <span key={item.name.common}>{item.name.common}</span>
              <button
                onClick={() => {
                  setDisplay(true);
                }}
              >
                show
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default App;
