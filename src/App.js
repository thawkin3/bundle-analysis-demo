// No lazy loading here
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

// Lazy loading pages with React.lazy, React.Suspense, and react-router-dom
// import React, { lazy, Suspense } from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import Layout from './components/Layout'
// import './App.css'

// const Pokedex = lazy(() => import('./pages/pokedex'))
// const About = lazy(() => import('./pages/about'))
// const Pokemon = lazy(() => import('./pages/pokemon'))
// const NoMatch = lazy(() => import('./components/NoMatch'))

// function App() {
//   return (
//     <main className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route
//               index
//               element={
//                 <Suspense fallback={<>...</>}>
//                   <Pokedex />
//                 </Suspense>
//               }
//             />
//             <Route
//               path="about"
//               element={
//                 <Suspense fallback={<>...</>}>
//                   <About />
//                 </Suspense>
//               }
//             />
//             <Route
//               path="pokemon/:id"
//               element={
//                 <Suspense fallback={<>...</>}>
//                   <Pokemon />
//                 </Suspense>
//               }
//             />
//             <Route
//               path="*"
//               element={
//                 <Suspense fallback={<>...</>}>
//                   <NoMatch />
//                 </Suspense>
//               }
//             />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </main>
//   )
// }

// export default App
