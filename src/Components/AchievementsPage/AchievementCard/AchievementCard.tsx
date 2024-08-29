import { Achievement } from '../../../types/IAchievement'

import './AchievementCard.css'

interface AchievementCardProps {
  achievement: Achievement,
  index: number
}

const AchievementCard = ({ achievement, index }: AchievementCardProps) => {
  const { name, description, images } = achievement

  const cardFor2Images = images.length === 2 ? 'two-images' : ''
  const reverse = !cardFor2Images && (index % 2 !== 0) ? 'reverse' : ''

  return (
    <div className={`achievement-card ${cardFor2Images} ${reverse}`}>
      <h2  className='achievement-card-name'>{name}</h2>
      <p className='achievement-card-description'>{description}</p>
      {images.map((image, index) => <img className={`achievement-card-image ${index === 0 ? 'image-one' : 'image-two'}`} src={image} />)}
    </div>
  )
}

export default AchievementCard