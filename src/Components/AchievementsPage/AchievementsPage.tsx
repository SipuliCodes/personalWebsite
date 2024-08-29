

import { Achievement } from '../../types/IAchievement'
import './AchievementsPage.css'

import StartupJourneyPitch from '../../assets/achievementIcons/startup_journey_pitch.jfif'
import StartupJourneyTeam from '../../assets/achievementIcons/startup_journey_team.jfif'
import DigitalSustainabilityHackathon from '../../assets/achievementIcons/digital_sustainability_hackathon.jfif'
import StartupMarathon from '../../assets/achievementIcons/startup_marathon.jfif'
import HealthTechHackathon from '../../assets/achievementIcons/revvity_health_tech_hackathon.jfif'
import AchievementCard from './AchievementCard/AchievementCard'

const achievements: Achievement[] = [
  {
    name: 'Boost Startup Journey',
    description: `I had the pleasure of participating in the Boost Startup Journey from June 23 to August 15, 2024. This 8-week program was an incredible experience, filled with intensive workshops and mentoring sessions that significantly enhanced my entrepreneurial skills. During this time, I honed my pitching abilities, forged valuable connections, and co-founded Kolt with Robi Johansson and Riku Lauttia. The supportive community and comprehensive program helped us refine our ideas, and I was honored to pitch on Demo Day, where our team secured 3rd place among many talented startups.`,
    images: [StartupJourneyPitch, StartupJourneyTeam]
  },
  {
  name: 'Digital Sustainability Hackathon',
  description: 'Participated in the Boost Digital Sustainability Hackathon, from May 3 to 5, 2024, my first opportunity to code in a competitive environment. I worked with a team to tackle sustainability challenges, learned effective GitHub collaboration practices, and navigated through technical issues with team support. This collaborative experience led us to win 1st place in one of the challenges.',
  images: [DigitalSustainabilityHackathon]
},
  {
    name: 'Boost Turku Startup Marathon',
    description: `During the Boost Turku Startup Marathon, held from March 17 to 19, I immersed myself in a weekend packed with innovation, networking, and insightful discussions. The event underscored the critical importance of validating startup ideas, a lesson that was instrumental in our approach. Networking with like-minded individuals and witnessing diverse startup ideas in action was incredibly rewarding. Our team’s efforts were recognized with a 2nd place finish. The event was also notable for its excellent venue and food, which contributed to a productive and enjoyable experience.`,
    images: [StartupMarathon]
  },
  {
    name: 'Revvity Health Tech Hackathon',
    description: 'My very first hackathon experience, the Revvity Health Tech Hackathon, from October 6 to 8, 2023. I had the  chance to work with an incredible team. The event was filled with excitement and challenges and even included delicious food that kept us  energized throughout. It was a fantastic learning opportunity and an unforgettable experience, especially since our efforts led us to win  1st place while addressing critical health tech challenges.',
    images: [HealthTechHackathon]
}

];

const AchievementsPage = () => {

  return (
    <div className='achievements-page-flex'>
      {achievements.map((achievement, index) => <AchievementCard index={index} achievement={achievement} />)}
    </div>
  )
}

export default AchievementsPage