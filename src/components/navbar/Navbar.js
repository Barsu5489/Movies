import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div className='nav-container'>
        <div className="logo">
            <img src="https://s3-alpha-sig.figma.com/img/a73b/9b32/376a54ffd2dfb11ef1f3a8b513491895?Expires=1695600000&Signature=PwVvK6KfdUw4JIzipR9rZvRmFJnvPO5O1aDWcC3-72QgXOG7EHZ1VxMy46eaqGN3vT9Y7NbePvbvSkUVgPVmMQ61xpnsWTRz00MAb5PIKPwjjVhkO7T30OqqpVW5i105r5HXrD2qdnu5gEzHN3fN3rwqkC58dDRBvkRDuBLpQIsb5kr7fMPGUvecD46K~ZhPvfSloW1m8re5yL-DWnQiY78WqoYidxryuXmPrT8mWF5HULiRCo1MwLUWlfxONKaUTbuFBI1aCOb77EwX5fFlA8akB6EHBTnceY6jmbyt-cw9QK-Bc3Z4IsYoS8MNfYxZPQY8z2HJ0ANwp4bQieTnrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            <h2>Movie Box</h2>
        </div>
        <div className="serch">
            <input type="text" placeholder='What do you want to watch?'/>
            <span className='text-search'><i class='bx bx-search' ></i></span>
            
        </div>
        <div className="account">
        <p>Sign in</p>
        <i class='bx bx-menu' ></i>
           
           
        </div>
    </div>
  )
}

export default Navbar