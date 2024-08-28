import { Routes, Route, useNavigate} from 'react-router-dom'
import React from 'react'

import './App.css'

import MainPage from './Components/MainPage/MainPage'
import CareerPage from './Components/CareerPage/CareerPage'

const App = () => {
  const navigate = useNavigate();

  const linkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/${event.currentTarget.id}`)
  }

  return (
    <div className='app-grid-container'>
      <div className='navigation-bar'>
        <button className='navigation-bar-item' id='main' onClick={linkClick}>Main</button>
        <button className='navigation-bar-item' id='career' onClick={linkClick}>Career</button>
      </div>
      <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route path='/career' element={<CareerPage />} />
        <Route path='*' element={<MainPage />} />
      </Routes>
      <div className='footer-flex'>
        <div className='footer'>
          <h3>Sisu Vepsäläinen © 2024</h3>
        </div>
      </div>
    </div>
  )
}

export default App
