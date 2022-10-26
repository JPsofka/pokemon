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
  const [pok, setpok] = useState({})
  const [pokemonToSearch, setpokemonToSearch] = useState("")
  const updatePokemonSelected = (pokemon) => {
    setpokemonSelected(pokemon)
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
    .then(data => setpok(data))
    // .then(()=>updatePokemonSelected(pok))
    
  }, [pokemonToSearch])
  console.log("soy, ",pok)
  console.log(pokemonApp)
  return (
    <PokeContext.Provider value={{pokemonApp, updatePokemonSelected, updatePokemonToSearch}}>
      {!pokemonSelected?<PokemonListPage/> :
        <PokemonDetails pokemonSelected = {pokemonSelected} 
        pok = {pok}/>}
        
    </PokeContext.Provider>
  );
}

export default App;
