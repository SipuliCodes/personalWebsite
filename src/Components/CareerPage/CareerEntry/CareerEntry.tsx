import './CareerEntry.css'

interface CareerEntryProps {
   careerEntry: {
    companyName: string;
    companyLogo: string;
    workDescription: string;
    startingDate: Date;
    endingDate?: Date;
   }
}

const CareerEntry = ({ careerEntry }: CareerEntryProps) => {
   const { companyName, companyLogo, workDescription, startingDate, endingDate = new Date() } = careerEntry;

  const formatDate = (date: Date): string => {
    const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    
    if (isToday(date)) {
      return 'Present'
    }
    return `${day}.${month}.${year}`
};
  
  return (
    <div className='career-entry-grid'>
      <div className='career-entry-details'>
        <h2 className='career-entry-company-name'>{companyName}</h2>
        <h5 className='career-entry-date'>{formatDate(startingDate)}-{formatDate(endingDate)}</h5>
      </div>
      <p className='career-entry-work-description'>{workDescription}</p>
      <div className='career-entry-company-logo-container'>
        <img className="career-entry-company-logo" src={companyLogo} />
      </div>
    </div>
  )
}

export default CareerEntry