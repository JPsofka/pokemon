import React, { useContext } from 'react'
import Navbar from '../components/navbar/Navbar'
import { PokeContext } from '../App'
import PokemonCard from '../components/pokemonCard/PokemonCard'

function PokemonListPage() {
  const {pokemonApp} = useContext(PokeContext)
  return (
    <>
    <Navbar/>
    <div className='main-container'>
    {!pokemonApp.pokemonList? <p>Loading...</p>:
      pokemonApp.pokemonList.map((pokemon)=>
        <PokemonCard key={pokemon.id} pokemon = {pokemon}/>
      )
    }
    </div>
    
    </>
  )
}

export default PokemonListPage