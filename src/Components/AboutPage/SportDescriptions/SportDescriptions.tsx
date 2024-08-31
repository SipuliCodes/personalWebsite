import SportDescriptionCard from "./SportDescriptionCard/SportDescriptionCard";
import { Sport } from "../../../types/IAbout";
import './SportDescriptions.css';

const sports: Sport[] = [
  {
    sport: 'Icehockey',
    description: 'I started icehockey at a young age in LJK, where I had the best time for many years. We went to different tournaments, some years even abroad, and it was so much fun. However, everything great comes to an end and I had to find a new team. I got into KooKoo U16 and played in KooKoo for 3 seasons. After that I played one more season in AaKoo and then ended my career, for now at least. I liked more being a forward, but always ended up as a defender. In the early years I was even a goaltender sometimes.'
  },
  {
    sport: 'Football',
    description: 'I played football for FC Loviisa, and I have many fond memories from that time, especially from our tournament trips. My favorite moment remains the only goal I scored with a header. I was a striker charging toward the opposing goalie, who, in a moment of panic, kicked the ball directly into my head. The ball ended up in the net, making it a memorable and unique goal. In football I was either goalie or striker, which both I liked.'
  },
  {
    sport: 'Orienteering',
    description: 'Running in forests is fun and also feels better than running on roads. I also like the feeling of success, when you are able to find the control point. You also learn to do multiple things at once as you have to watch where you put your feet and look at the map at the same time.'
  },
  {
    sport: 'Gym',
    description: 'I started going to the gym at the same time I switched to KooKoo. I liked it except for some movements that I hated. After I left KooKoo I could do what I wanted in the gym and it was much more fun.'
  },
  {
    sport: 'Calisthenics',
    description: 'I had started calisthenics earlier but as I had a strict gym program in KooKoo I couldn\'t focus on it. So after KooKoo, I started to implement it more to my program and finally decided to just do calisthenics atleast for a while. So far it has been a good desicion as I have made more progress in one summer than on 2 years doing it together with other stuff.'
  },
  {
    sport: 'Golf',
    description: 'I started golf as one of my high school friends asked me to come and play. I had to at least try it and I really enjoyed it so then I started it. I like golf, because it is so chill and you can just chat with your play mates. And if you don\'t have 3 friends who play, you get to know new people on every round. It is also a strategic game as you have to think how to play. Also it is so satisfying when you manage a perfect shot. My best moment is when I chipped from a bunker straight to the hole.'
  },
  {
    sport: 'Others',
    description: 'I have also played many other sports and I cannot think of any sport that I wouldn\'t like. So I am always open to play whatever sport. I also jog regurlary.'
  }
]

const SportDescriptions = () => {

  return (
    <div className="sport-descriptions-flex">
      {sports.map(sport => <SportDescriptionCard sport={sport.sport} description={sport.description} />)}
    </div>
  )
}

export default SportDescriptions;