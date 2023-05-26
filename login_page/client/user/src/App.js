import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Login/Login'
import Signup from './Signup/Signup'
import Home from './Home/Home'

function App() {
  return (
    <div>
    <BrowserRouter >
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
