import './App.css'
import { Route, Routes } from 'react-router';
import PokemonApp from './PokemonApp';
import { PokeDetails } from './components/PokeDetails';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PokemonApp />} />
        <Route path="details" element={<PokeDetails />}/>
      </Routes>
      
    </>
  )
}

export default App
