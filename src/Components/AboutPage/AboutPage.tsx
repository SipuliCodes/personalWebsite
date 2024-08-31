import './AboutPage.css';
import SportDescriptions from './SportDescriptions/SportDescriptions';
import SportsTimeline from './SportsTimeline/SportsTimeline';

const AboutPage = () => {

  return (
    <div className="about-page-flex">
      <p className="about-page-description">
        I enjoy spending time with my family and loved ones. Travelling, playing sports, eating good food and watching sports are all close to my heart. I have been fortunate enough to get to play many, both team and solo, sports in my life. In team sports I have learned great team working skills, helping each other out and doing things together. In solo sports I have learned to get things done and solve problems on my own.
        <br></br>
        <br></br>
        I would describe myself as an eager and quick learner, who likes to take up on challenges. The more challenging the task feels in the beginning, the more rewarding it feels when I am able to solve it. I also like to help people and I am always up to help people in any way I can. It feels so rewarding when I am able to help someone with my skills and I can see how happy they are when their problem is solved.
        <br></br>
        <br></br>
        I speak and write fluently 3 languages, which are English, Swedish and Finnish. I am able to work in any of these 3 languages. Growing up in a bilingual family has been rewarding. For example it has allowed me to go hockey camps in Sweden at a young age and find friends in distance countries on holidays. As I have been able to talk with Finns, Swedes and Norwegians. I am also in the process of learning a fourth language.
      </p>
      <SportsTimeline />
      <SportDescriptions />
    </div>
  )
}

export default AboutPage