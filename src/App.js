import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        <a
          href="https://github.com/KateKlu/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code{" "}
        </a>
        , by Katerina Kliuieva
      </p>
    </div>
  );
}

export default App;
