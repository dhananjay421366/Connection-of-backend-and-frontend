import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Hallo Dhanu how are you</h1>
      <p>{jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={index}>
          <h3>{joke.joke}</h3>
          <p>{joke.author}</p>
        </div>
      ))
      }
    </>
  );
}

export default App;
