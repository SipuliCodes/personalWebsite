import { Routes, Route} from 'react-router-dom'

import './App.css'

import MainPage from './Components/MainPage/MainPage'
import CareerPage from './Components/CareerPage/CareerPage'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import AchievementsPage from './Components/AchievementsPage/AchievementsPage'
import AboutPage from './Components/AboutPage/AboutPage'
import EducationPage from './Components/EducationPage/EducationPage'

const App = () => {

  return (
    <div className='app-grid-container'>
      <NavigationBar />
      <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route path='/career' element={<CareerPage />} />
        <Route path='/education' element={<EducationPage />} />
        <Route path='/achievements' element={<AchievementsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<MainPage />} />
      </Routes>
      <div className='footer-flex'>
        <div className='footer'>
          <h3 className='copyright'>Sisu Vepsäläinen © 2024</h3>
          <div className="contact-bar">
            <h4 className='find-me'>Find me:</h4>
            <a className='contact-bar-link' href="https://www.linkedin.com/in/sisu-veps%C3%A4l%C3%A4inen-654b02238/">LinkedIn</a>
            <a className='contact-bar-link' href="https://github.com/SipuliCodes">GitHub</a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
