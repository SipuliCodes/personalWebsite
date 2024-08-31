import './EducationPage.css'

import EducationEntry from "./EducationEntry/EducationEntry"

import UniversityOfTurkuIcon from '../../assets/educationIcons/university_of_turku.svg'
import KouvolaYhteisLyseo from '../../assets/educationIcons/kouvola_yhteislyseo.png'

interface EducationEntryType {
  schoolName: string,
  schoolLogo: string,
  description: string,
  startingDate: Date,
  endingDate?: Date
}

const educationEntries: EducationEntryType[] = [
  {
    schoolName: "University of Turku",
    schoolLogo: UniversityOfTurkuIcon,
    description: "I am currently pursuing my Bachelor's Degree in Information and Communication Technology (ICT) with a major in ICT and a minor in Entrepreneurship. I will graduate in Spring 2025.",
    startingDate: new Date(2023, 8, 1 )
  },
  {
    schoolName: "Kouvolan yhteislyseo",
    schoolLogo: KouvolaYhteisLyseo,
    description: "In high school, I studied Mathematics, Physics, Chemistry, and Biology. For the matriculation examination, I took Finnish (native language), advanced Swedish, advanced English, advanced Mathematics, Physics, and Chemistry. I did not take Biology because it was not required for my admission to ICT studies.",
    startingDate: new Date(2020, 7, 11),
    endingDate: new Date(2023, 5, 3)
  }
];



const EducationPage = () => {
  return (
    <div className="education-page-flex">
      {educationEntries.map((educationEntry) => <EducationEntry educationEntry={educationEntry} />)}
      <div className='education-page-bottom-margin'></div>
    </div>
  )
}

export default EducationPage