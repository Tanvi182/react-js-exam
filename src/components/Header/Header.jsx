import React from 'react'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
function Header() {
  return (
    <div>
        <div className="container rounded rounded-pill bg-secondary-subtle text-dark p-4 my-3">
            <Logo/>

            <Navbar/>

            
        </div>

    </div>
  )
}

export default Header