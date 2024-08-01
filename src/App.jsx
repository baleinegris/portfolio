import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
    </>
  )
}

export default App