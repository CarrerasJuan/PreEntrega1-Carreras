import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListConteiner from './components/ItemListConteiner'

function App() {
  return (
    <>
    <NavBar />
    <ItemListConteiner greeting='Bienvenidos'/>
    </>
  );
}

export default App
