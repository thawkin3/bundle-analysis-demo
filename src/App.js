import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import NoMatch from './components/NoMatch'
import About from './pages/about'
import Pokedex from './pages/pokedex'
import Pokemon from './pages/pokemon'
import './App.css'

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Pokedex />} />
            <Route path="about" element={<About />} />
            <Route path="pokemon/:id" element={<Pokemon />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
