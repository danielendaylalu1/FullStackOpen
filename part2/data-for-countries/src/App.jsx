import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [shown, setShown] = useState([]);
  // const [display, setDisplay] = useState(false);
  // const [toshow, setToShow] = useState("");

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
            const contriesToShow = countries.filter((country) => {
              return country.name.common
                .toLowerCase()
                .includes(e.target.value.toLowerCase().trim());
            });
            setShown(
              contriesToShow.map((c) => {
                return { ...c, show: false };
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
              <span>{item.name.common}</span>
              <button
                onClick={() => {
                  // setToShow(item.name.common);
                  setShown(
                    shown.map((c) => {
                      return item.name.common === c.name.common
                        ? { ...c, show: !c.show }
                        : { ...c };
                    })
                  );
                }}
              >
                show
              </button>
              {item.show ? (
                <div key={item.name}>
                  <h2>{item.name.common}</h2>
                  <p>capital {item.capital[0]}</p>
                  <p>area {item.area}</p>
                  <h2>Languages</h2>
                  {Object.keys(item.languages).map((k) => {
                    return <p key={k}>{item.languages[k]}</p>;
                  })}
                  <h1>{item.flag}</h1>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default App;
