import React, {useContext} from 'react';
import {PokeContext} from '../../App'
import '../navbar/navbar.css'


function Navbar() {

  const {updatePokemonSelected} = useContext(PokeContext)

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const {pokemon} = ev.target.elements
    const pokemonValue = pokemon.value
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonValue}`)
    .then(response => response.json())
    .then(data => updatePokemonSelected(data))
  }

  return (
    <>
    <nav className='navbar'>
      <h1>PokeHub</h1>
      <div className='search'>
        <form onSubmit={handleSubmit}>
          <input name='pokemon' type="text" 
            placeholder='Search Pokemon' className='search'/>
          <button>
          <i className='fa fa-search'></i>
          </button>
        </form>
      </div>
    </nav>
    </>
  )
}

export default Navbar