import { useState, useEffect, createContext } from "react";
import PokemonListPage from "./pages/PokemonListPage";

const API = "https://pokeapi.co/api/v2/pokemon"

export const PokeContext = createContext(null)

function App() {
  const [pokemonApp, setpokemonApp] = useState({
    pokemonList:[],
    pokemonToSearch:""
  })

  
  const updatePokemonToSearch = (pokemon) => {
    setpokemonApp((currentPokemon) => ({
      ...currentPokemon,
      pokemonToSearch: pokemon
    }))
  }

  useEffect(() => {
    const pokeArray = []
    fetch(`${API}?limit=50`)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pokemon => {
            fetch(pokemon.url)
            .then(response => response.json())
            .then(pokemonData => pokeArray.push(pokemonData))
            .then(()=>{
              setpokemonApp({
                pokemonList:pokeArray
              })
            })
        });
    })
  },[])
  
  return (
    <PokeContext.Provider value={{pokemonApp, updatePokemonToSearch}}>
      <PokemonListPage/>
    </PokeContext.Provider>
  );
}

export default App;
