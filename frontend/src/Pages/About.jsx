import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/About.css'
import aboutimg from '../assets/AI-img-1.png'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">        
        <div className="about-img">
          <img src={aboutimg} alt="aboutimg" />
        </div>
        <div className="about-me">        
          <h1>About Me</h1>
          <div className="about-img-mobile">
            <img src={aboutimg} alt="aboutimg" />
          </div>
          <p>Motivated and driven entry-level <span>Full Stack
          Developer</span> with a strong foundation in web
application development. Proficient in <span>HTML</span>, <span>CSS</span>, <span>Bootstrap</span>, <span>Tailwind</span>, <span>JavaScript</span>, <span>React.js</span>, <span>Express.js</span>, <span>Node.js</span> and <span>MongoDB</span> well-equipped to
contribute to the success of dynamic
development teams. Goal is to make <span>valuable
contributions</span> in the creation of <span>innovative web
Applications</span> that meet user needs and exceed
expectations</p>
            <Link to="/personal"> <h6 className='about-more animate-pulse' >→ Click Here to Know more ←</h6></Link>
        </div>      
      </div>
    </>
  )
}

export default About