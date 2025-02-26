import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Notes from './components/Notes'
import Login from './components/Login'
import { Nav } from 'react-bootstrap'
import NavBar from './components/NavBar'
import {Routes,Route, Link } from 'react-router-dom'
import Home from './components/Home'
import My1page from './components/My1page'
import My2page from './components/My2page'


function App() {

  return (
      <div className="a">
        <NavBar/>
          {/* <nav>
            <Link to="/">Home</Link> |
            <Link to="my1p">My1page</Link>|
            <Link to="my2p">My2page</Link>
          </nav> */}
          <Routes >
            <Route path="/" element={<Home/>}/>
            <Route path="/My1p" element={<My1page/>}/>
            <Route path="/My2p" element={<My2page/>} />  
          </Routes>         
        <Notes/>
        <Login/> 
      </div>
  
  )
}

export default App
