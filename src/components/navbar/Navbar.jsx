import React from 'react';
import '../navbar/navbar.css'

function Navbar() {
  return (
    <>
    <nav className='navbar'>
      <h1>PokeHub</h1>
      <div className='search'>
        <form action="#">
          <input type="text" placeholder='Search Pokemon' className='search'/>
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