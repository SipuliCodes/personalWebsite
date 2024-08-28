import { Routes, Route} from 'react-router-dom'

import './App.css'

import MainPage from './Components/MainPage/MainPage'
import CareerPage from './Components/CareerPage/CareerPage'
import NavigationBar from './Components/NavigationBar/NavigationBar'

const App = () => {

  return (
    <div className='app-grid-container'>
      <NavigationBar />
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
