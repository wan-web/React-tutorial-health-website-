import './about.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil eaque ratione praesentium at rerum non magnam, similique nesciunt quibusdam autem!
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi hic laborum accusamus illum cupiditate consectetur exercitationem voluptates! Illum, blanditiis excepturi ipsum ea modi dolorem vitae odit atque saepe nulla accusantium?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dignissimos, corrupti ducimus deleniti unde numquam? Earum laudantium voluptate provident magni.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, fugit.</p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi hic laborum accusamus illum cupiditate consectetur exercitationem voluptates! Illum, blanditiis excepturi ipsum ea modi dolorem vitae odit atque saepe nulla accusantium?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dignissimos, corrupti ducimus deleniti unde numquam? Earum laudantium voluptate provident magni.</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi hic laborum accusamus illum cupiditate consectetur exercitationem voluptates! Illum, blanditiis excepturi ipsum ea modi dolorem vitae odit atque saepe nulla accusantium?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dignissimos, corrupti ducimus deleniti unde numquam? Earum laudantium voluptate provident magni.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, fugit.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About