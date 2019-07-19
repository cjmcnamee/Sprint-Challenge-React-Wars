import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";
import './App.css';
import Character from "./components/Character.js"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState('');

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect( () => {
    axios.get("https://swapi.co/api/people/")
    .then( (res) => {
      console.log(res.data.results);
      setCharacter(res.data.results);

    });
  })

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        {character.map( (item, key) =>
          <Character
            itemProp = {item}
            key = {key}
          />
        )}
    </div>
  );
}

export default App;
