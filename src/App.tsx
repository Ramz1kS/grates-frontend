import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import WelcomePage from './pages/WelcomePage/WelcomePage'
import PageManager from './pages/PageManager/PageManager'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<WelcomePage></WelcomePage>}></Route>
        <Route path='/welcome' element={<WelcomePage></WelcomePage>}></Route>
        <Route path='/active' element={<PageManager></PageManager>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
