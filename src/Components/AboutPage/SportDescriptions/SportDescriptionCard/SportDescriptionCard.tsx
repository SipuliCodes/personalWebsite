import './SportDesciptionCard.css'

interface SportDescriptionCardProps {
  sport: string,
  description: string
}

const SportDescriptionCard = ({sport, description}: SportDescriptionCardProps) => {

  return (
    <div className="sport-description-card-flex">
      <h2 className='sport-description-card-sport'>{sport}</h2>
      <p className='sport-description-card-description'>{description}</p>
    </div>
  )
}

export default SportDescriptionCard