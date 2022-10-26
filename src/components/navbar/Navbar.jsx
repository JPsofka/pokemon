import React, {useState, useContext, useEffect} from 'react';
import {PokeContext} from '../../App'
import '../navbar/navbar.css'


function Navbar() {

  const [pokemon, setpokemon] = useState("")
  const {updatePokemonToSearch} = useContext(PokeContext)

  const handleChange = (e) => {
    setpokemon({
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    updatePokemonToSearch(pokemon)
  }

  useEffect(() => {
    console.log(pokemon)
  }, [pokemon])
  

  return (
    <>
    <nav className='navbar'>
      <h1>PokeHub</h1>
      <div className='search'>
        <form action="#">
          <input name='pokemon' type="text" 
            placeholder='Search Pokemon' className='search' onChange={handleChange}/>
          <button 
                  onClick={handleSubmit}>
          <i className='fa fa-search'></i>
          </button>
        </form>
      </div>
    </nav>
    </>
  )
}

export default Navbar