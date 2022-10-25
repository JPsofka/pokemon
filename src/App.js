import { useState, useEffect } from "react";

const API = "https://pokeapi.co/api/v2/pokemon"

function App() {
  const [pokemonList, setpokemonList] = useState([])

  useEffect(() => {
    const pokeArray = []
    fetch(`${API}?limit=50`)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pokemon => {
            fetch(pokemon.url)
            .then(response => response.json())
            .then(pokemonData => pokeArray.push(pokemonData));
            setpokemonList(pokeArray)
        });
    })
  },[])
  
  console.log(pokemonList)
  return (
    <div className="App">
      Hola
    </div>
  );
}

export default App;
