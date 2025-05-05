import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import WelcomePage from './pages/WelcomePage/WelcomePage'
import PageManager from './pages/PageManager/PageManager'
import { NotFoundPage } from './pages/NotFound/NotFoundPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={"/welcome"}></Navigate>}></Route>
        <Route path='/welcome' element={<WelcomePage></WelcomePage>}></Route>
        <Route path='/active/*' element={<PageManager></PageManager>}></Route>
        <Route path='/notfound' element={<NotFoundPage></NotFoundPage>}></Route>
        <Route path='*' element={<Navigate to={"/notfound"}></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
