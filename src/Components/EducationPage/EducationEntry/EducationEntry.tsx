import './EducationEntry.css'

interface EducationEntryProps {
   educationEntry: {
    schoolName: string;
    schoolLogo: string;
    description: string;
    startingDate: Date;
    endingDate?: Date;
   }
}

const EducationEntry = ({ educationEntry }: EducationEntryProps) => {
   const { schoolName, schoolLogo, description, startingDate, endingDate = new Date() } = educationEntry;

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
    <div className='education-entry-grid'>
      <div className='education-entry-details'>
        <h2 className='education-entry-company-name'>{schoolName}</h2>
        <h5 className='education-entry-date'>{formatDate(startingDate)}-{formatDate(endingDate)}</h5>
      </div>
      <p className='education-entry-work-description'>{description}</p>
      <div className='education-entry-company-logo-container'>
        <img className="education-entry-company-logo" src={schoolLogo} />
      </div>
    </div>
  )
}

export default EducationEntry