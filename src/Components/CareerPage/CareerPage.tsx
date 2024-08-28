import './CareerPage.css'

import CareerEntry from "./CareerEntry/CareerEntry"

import KoltIcon from '../../assets/careerIcons/kolt.svg'
import LovalIcon from '../../assets/careerIcons/loval_logo.png'
import SolIcon from '../../assets/careerIcons/sol.png'

interface CareerEntryType {
  companyName: string,
  companyLogo: string,
  workDescription: string,
  startingDate: Date,
  endingDate?: Date
}

const careerEntries: CareerEntryType[] = [
  {
    companyName: 'Kolt Oy',
    companyLogo: KoltIcon,
    workDescription: 'Co-founder, responsible for developing mobile application using React Native and backend services with Express.',
    startingDate: new Date(2024, 5, 23),
  },
  {
    companyName: 'Loval Oy',
    companyLogo: LovalIcon,
    workDescription: 'I conducted pressure testing of plate heat exchangers, as well as assembling and compressing them.',
    startingDate: new Date(2023, 3, 20),
    endingDate: new Date(2023, 7, 31)
  },
  {
    companyName: 'Sol Oy',
    companyLogo: SolIcon,
    workDescription: 'I cleaned hotel rooms and lobbies. I also participated in guest entertainment as Onni Orava, providing a memorable experience for guests.',
    startingDate: new Date(2022, 5, 1),
    endingDate: new Date(2022, 6, 31)
  }
];



const CareerPage = () => {
  return (
    <div className="career-page-flex">
      {careerEntries.map((careerEntry) => <CareerEntry careerEntry={careerEntry} />)}
      <div className='career-page-bottom-margin'></div>
    </div>
  )
}

export default CareerPage