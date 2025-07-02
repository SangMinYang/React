import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InputState from './components/inputState.jsx'
//React.StriptMode 에서 React 생략 가능(React Dom)도 생략가능.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    
    <Wellcome/> */}
    <InputState />
  </StrictMode>

)
