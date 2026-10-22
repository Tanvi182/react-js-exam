import React from 'react'
import { Link } from 'react-router' 
function Navbar() {
  return (
    <div>
        <Link to="/latests">
            Latests
        </Link>

        <Link to="/tvshows">
            Tv Shows
        </Link>

        <Link to="/movies">
            Movies
        </Link>

        <Link to="/episodes">
            Episodes
        </Link>
        
    </div>
  )
}

export default Navbar