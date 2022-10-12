import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import axios from 'axios';

const App = () => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        setCharacters(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(`There was an error: ${err}`));

    return () => console.log("Cleaned side effect");
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((character, index) => <Character data={character} key={index} />)}
      
    </div>
  );
}

export default App;
