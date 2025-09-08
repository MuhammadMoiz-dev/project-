import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import './App.css'




function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar><Home /></Navbar>} />
          <Route path='/home' element={<Navbar><Home /></Navbar>} />
          <Route path='/contact' element={<Navbar><Contact /></Navbar>} />
          <Route path='/about' element={<Navbar><About /></Navbar>} />
          <Route path='/login' element={<Navbar><Login /></Navbar>} />
          <Route path='/signup' element={<Navbar><Signup /></Navbar>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
