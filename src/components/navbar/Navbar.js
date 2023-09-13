import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div className='nav-container'>
        <div className="logo">
            <h2>e</h2>
            <h2>m</h2>
        </div>
        <div className="serch">
            <input type="text" />
        </div>
        <div className="account">
            <button>sign in</button>
            <button>hu</button>
        </div>
    </div>
  )
}

export default Navbar