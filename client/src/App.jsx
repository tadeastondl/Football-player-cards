import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditPage from './pages/EditPage'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
function App() {

  return (
    <>
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/edit/:id' element={<EditPage />} />
          <Route path='/create' element={<CreatePage />} />
        </Routes>
      </BrowserRouter>  </>

  )
}

export default App
