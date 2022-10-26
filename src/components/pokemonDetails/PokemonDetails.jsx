import React,{useContext} from 'react'
import Navbar from '../navbar/Navbar'
import { PokeContext } from '../../App'
import '../pokemonDetails/pokemondetails.css'

function PokemonDetails({pokemonSelected}) {
    
    const {updatePokemonSelected} = useContext(PokeContext)

    const {sprites, name, abilities, height, weight, stats} = pokemonSelected
    return (
    <>
        <Navbar/>
        {
            <div className='pokemonDetails-container'>
            <h3>Name: {name}</h3>
            <div className="images">
                <img src={sprites.front_default} alt="" />
                <img src={sprites.back_default} alt="" />
            </div>
            <h5>Abilities:</h5>
            {abilities.map((ability, index) =>
                <h5 key={index}>- {ability.ability.name}</h5>
            )}
            <h5>Height: {height}</h5>
            <h5>Weight: {weight}</h5>
            <h5>Stats: </h5>
            {stats.map((stat, index) =>
                <h5 key={index}>- {stat.stat.name} : {stat.base_stat}</h5>
            )}
            <button className='back-button' onClick={()=>updatePokemonSelected("")}>Back</button>
        </div>
        }
    </>
  )
}

export default PokemonDetails