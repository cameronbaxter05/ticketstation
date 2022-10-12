import React from 'react'
import Parent from '../assets/components/PortalModal'
import { Navbar } from '../components'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='home__content'>
        <div className='first__content'>
           <div className='content'>
           <h2>Tom Grennan</h2>
           <p>Touring his new album</p>
           <button className='btn'>Find Tickets</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Home