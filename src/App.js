import { useState } from 'react'
import './App.css'
//import styles from './components/Card/Card.module.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'


function App () {
  const [characters, setCharacter] = ([useState])
  return (
    <div className='App' style={{ padding: '25px' }}>
        <div>
         <Nav/>
        </div>
      <div>
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
