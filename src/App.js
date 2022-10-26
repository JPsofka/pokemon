import { useState, useEffect, createContext } from "react";
import PokemonDetails from "./components/pokemonDetails/PokemonDetails";
import PokemonListPage from "./pages/PokemonListPage";

const API = "https://pokeapi.co/api/v2/pokemon"

export const PokeContext = createContext(null)

function App() {
  const [pokemonApp, setpokemonApp] = useState({
    pokemonList:[],
  })
  const [pokemonSelected, setpokemonSelected] = useState("")
  const updatePokemonSelected = (pokemon) => {
    setpokemonSelected(pokemon)
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
    <PokeContext.Provider value={{pokemonApp, updatePokemonSelected}}>
      {!pokemonSelected?<PokemonListPage/> :
        <PokemonDetails pokemonSelected = {pokemonSelected} />}
        
    </PokeContext.Provider>
  );
}

export default App;
