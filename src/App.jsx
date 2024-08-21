import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Pages/Main/Main'
import Homepage from './components/Pages/Main/Homepage'

function App() {
  return (
    <>
      <BrowserRouter basename='/portfolio'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App