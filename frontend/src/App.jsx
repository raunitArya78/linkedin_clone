import { useState } from 'react'
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import Recruiter from "./components/Recruiter_Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recruiter-home" element={<Recruiter />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;