import { useState } from 'react'
import './App.css'
import { pokemons } from './components/pokemons.jsx'

function App() {
  return (
    <>
      <h1>POKEMON + REACT</h1>

      <navbar>Barra de busqueda </navbar>
      <button>search</button>
      <div class='pokemons'>
        <p>#{pokemons.id}</p>
        <p>{pokemons.name}</p>
        <img src={pokemons.imageUrl} class='miniatura'></img>
        <img src={pokemons.imgType} class='imgtype'></img>
      </div>
      <div class='pokemons'>
        <p>#{pokemons.id}</p>
        <p>{pokemons.name}</p>
        <img src={pokemons.imageUrl} class='miniatura'></img>
        <img src={pokemons.imgType} class='imgtype'></img>
      </div>
      <div class='pokemons'>
        <p>#{pokemons.id}</p>
        <p>{pokemons.name}</p>
        <img src={pokemons.imageUrl} class='miniatura'></img>
        <img src={pokemons.imgType} class='imgtype'></img>
      </div>
      <div class='pokemons'>
        <p>#{pokemons.id}</p>
        <p>{pokemons.name}</p>
        <img src={pokemons.imageUrl} class='miniatura'></img>
        <img src={pokemons.imgType} class='imgtype'></img>
      </div>
    </>
  )
}

export default App
