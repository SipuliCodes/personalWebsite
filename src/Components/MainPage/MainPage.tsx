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
          {listOfExperience.map((experience, index) => <img key={index} className='main-page-experience-icon' src={experience}></img>)}
        </div>
      </div>
      <div className='main-page-details-flex'>
        <h2>Sisu Vepsäläinen</h2>
        <img className='main-page-details-image' src={Me}></img>
        <h3>ICT student at University of Turku</h3>
      </div>
    </div>
  )
}

export default MainPage