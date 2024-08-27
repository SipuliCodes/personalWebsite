import './MainPage.css'

import CsharpIcon from '../../assets/experienceIcons/Csharp.svg'
import JavaIcon from '../../assets/experienceIcons/java.svg'
import AzureIcon from '../../assets/experienceIcons/Microsoft_Azure.svg'
import MongoDbIcon from '../../assets/experienceIcons/mongodb.svg'
import NodeJsIcon from '../../assets/experienceIcons/nodejs.svg'
import PythonIcon from '../../assets/experienceIcons/python.svg'
import ReactIcon from '../../assets/experienceIcons/React-icon.svg'
import TSIcon from '../../assets/experienceIcons/typescript.svg'
import Me from '../../assets/me.jpg'

const listOfExperience: string[] = [
  ReactIcon,
  TSIcon,
  MongoDbIcon,
  NodeJsIcon,
  PythonIcon,
  CsharpIcon,
  JavaIcon,
  AzureIcon
]

const MainPage = () => {
  return (
    <div className="main-page-grid">
      <div className='main-page-experience-flex'>
        <h2>Experience</h2>
        <div className='main-page-experience-icon-grid'>
          {listOfExperience.map(experience => <img className='main-page-experience-icon' src={experience}></img>)}
        </div>
      </div>
      <div className='main-page-details-flex'>
        <h2>Sisu Vepsälinen</h2>
        <img className='main-page-details-image' src={Me}></img>
        <h3>ICT student at University of Turku</h3>
        <div className="contact-bar">
          <a className='contact-bar-link' href="https://www.linkedin.com/in/sisu-veps%C3%A4l%C3%A4inen-654b02238/">LinkedIn</a>
          <a className='contact-bar-link' href="https://github.com/SipuliCodes">GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default MainPage