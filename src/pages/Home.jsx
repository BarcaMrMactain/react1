import React from 'react'
import Navbar from '../layout/Navbar'
import { Link } from 'react-router'


const Home = () => {
  return (

    <div>
        <h1 id='center' class='velkommen'>Velkommen til forsiden</h1>
        
        {/* Interne links */}
        <p>
          <Link class='lokh' to="/about">Læs om os</Link>
        </p>

        <p>
          <a class='lokh' href="about">klik her (a-tag)</a>
        </p>

        {/* Eksterne links */}
        <p>
          <a class='lokh' href="http://videndjurs.dk" target="_blank">VidenDjurs</a>
        </p>
        
    </div>
  )
}

export default Home