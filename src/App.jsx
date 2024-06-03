import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupForm';
import AboutPage from './Components/AboutPage';
import NaviBar from './Components/NaviBar';
import Footer from './Components/Footer';
import Acording from './Acording';
import Phone from './Components/Phone';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <NaviBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/details/:id" element={<Phone/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App
