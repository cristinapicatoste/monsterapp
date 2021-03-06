import React, { useState } from "react";
import { CardList } from "./components/CardList/CardList";
import { SearchBox } from "./components/SearchBox/SearchBox";

import './App.css';


function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState();
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField?.toLowerCase()))

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(monster => setMonsters(monster))
    .catch(console.log)

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        type={"search"}
        placeholder={"Search monster"}
        onChange={setSearchField}
      />
      {
        !searchField && monsters
          ? <CardList monsters={monsters} />
          : <CardList monsters={filteredMonsters} />
      }
    </div>
  );
}

export default App;
