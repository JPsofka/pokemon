import { useState, useEffect, createContext } from "react";
import PokemonDetails from "./components/pokemonDetails/PokemonDetails";
import PokemonListPage from "./pages/PokemonListPage";

const API = "https://pokeapi.co/api/v2/pokemon"

export const PokeContext = createContext(null)

function App() {
  const [pokemonApp, setpokemonApp] = useState({
    pokemonList:[],
    pokemonSelected:"",
  })

  const [pokemonToSearch, setpokemonToSearch] = useState("")
  const updatePokemonSelected = (pokemon) => {
    setpokemonApp((currentPokemon) => ({
      ...currentPokemon,
      pokemonSelected: pokemon
    }))
  }

  const updatePokemonToSearch = (pokemon) => {
    setpokemonToSearch(pokemon)
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

  useEffect(() => {
    fetch(`${API}/${pokemonToSearch}`)
    .then(response => response.json())
    .then(data => console.log(data))
  }, [pokemonToSearch])
  
  console.log(pokemonApp)
  return (
    <PokeContext.Provider value={{pokemonApp, updatePokemonSelected, updatePokemonToSearch}}>
      {!pokemonApp.pokemonSelected?<PokemonListPage/> :
        <PokemonDetails pokemonSelected = {pokemonApp.pokemonSelected} 
        pokemoToSearch = {pokemonToSearch}/>}
    </PokeContext.Provider>
  );
}

export default App;
