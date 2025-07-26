import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './store/store';
import { Route, Routes } from 'react-router';
import PokemonApp from './PokemonApp';
import { PokeDetails } from './components/PokeDetails';


function App() {
  
  const count = useSelector((state:RootState) => state.counter.counter);
  const dispatch = useDispatch();

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
