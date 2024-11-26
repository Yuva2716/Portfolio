import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'
import image1 from '../assets/AI-img-5.png'


const Home = () => {
  return (
    <>
       <Navbar />
       <div className="Home-page">
        <div className="me">
          <h4>Hello!</h4>
          <h1>I'm <span>Yuvaraj</span></h1>
          <h2 className='animate-pulse'>Full Stack <span>Developer</span></h2>
          <div className="buttons">
            <Link to='contact'>
              <button className='Hire-btn'>Hire me</button>
            </Link>
            <Link to='all-projects'>
              <button className='Project-btn'>My Projects</button>            
            </Link>
            <a href="/YUVARAJ.pdf" download>
              <button className='resume-btn'>Download CV</button>
            </a>
          </div>  
        </div>          
          <div className="image-1">
            <img className='animate-pulse' src={image1} alt="" />
          </div>
       </div>       
    </>
  )
}

export default Home