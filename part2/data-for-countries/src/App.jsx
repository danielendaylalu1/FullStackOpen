import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [shown, setShown] = useState([]);

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
          <h1>{shown[0].flag}</h1>
        </div>
      ) : (
        shown.map((item) => {
          return <p key={item.name.common}>{item.name.common}</p>;
        })
      )}
    </div>
  );
};

export default App;
