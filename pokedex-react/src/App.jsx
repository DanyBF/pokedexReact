import { useState } from 'react'
import './App.css'
import { pokemons } from './components/pokemons.jsx'

function App() {
  return (
    <>
      <h1>POKEMON + REACT</h1>
      <div class='pokemons'>
        <p>{pokemons.name}</p>
      </div>
    </>
  )
}

export default App
