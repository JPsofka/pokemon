import React from 'react'
import '../pokemonCard/pokemoncard.css'

function PokemonCard({pokemon}) {
  return (
    <>
        <div className="container">
            <img src={pokemon.sprites.front_default} alt="pokemon" />
            <div className="info">
                <h2 className='name'>{pokemon.name}</h2>
                {pokemon.types.map((type,index)=> 
                <p className='types'key={index}>{type.type.name}</p>)}
            </div>
        </div>
    </>
  )
}

export default PokemonCard