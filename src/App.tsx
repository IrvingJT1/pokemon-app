import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './store/store';
import { increment, decrement, incrementByAmount } from './store/slices/counter';


function App() {
  
  const count = useSelector((state:RootState) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-3xl font-bold underline">    Hello world!  </h1>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          count is {count}
        </p>
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
      </div>
      
    </>
  )
}

export default App
