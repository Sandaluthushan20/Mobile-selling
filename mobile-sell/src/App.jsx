import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupForm';
import AboutPage from './Components/AboutPage';
import NaviBar from './Components/NaviBar';
import Footer from './Components/Footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <NaviBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
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
