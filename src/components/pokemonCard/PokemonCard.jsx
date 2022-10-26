import React,{useContext} from 'react'
import { PokeContext } from '../../App.js'
import '../pokemonCard/pokemoncard.css'


function PokemonCard({pokemon}) {
  const {updatePokemonSelected} = useContext(PokeContext)
  return (
    <>
        <div className="container">
            <img src={pokemon.sprites.front_default} alt="pokemon" />
            <div className="info">
                <h2 className='name'>{pokemon.name}</h2>
                {pokemon.types.map((type,index)=> 
                <p className='types'key={index}>{type.type.name}</p>)}    
            </div>
            <button onClick={()=>updatePokemonSelected(pokemon)}>
              <i className='fa fa-arrow-right'></i>
            </button>
        </div>
    </>
  )
}

export default PokemonCard