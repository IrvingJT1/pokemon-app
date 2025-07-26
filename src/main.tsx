import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import PokemonApp from './PokemonApp.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

const container = document.getElementById('root');

if(container){
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <Provider store={store}>
        {/* <App /> */}
        <PokemonApp />
      </Provider>
      
    </StrictMode>,

  )
}
else
{
  throw new Error(
     "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}


