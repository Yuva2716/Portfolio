import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/Personal.css'
import personalimg from '../assets/AI-img-9.png'

const Personal = () => {
  return (
    <>
        <Navbar />
        <div className="personal-page text-light">
            <h2 className='edu-title'>Personal Information</h2>
            <img src={personalimg} alt="personalimg" className='lg-srn-img' />
            <div className="details">
            <img src={personalimg} alt="personalimg" />
            <table>                
                <tr>
                    <td className='info-col'>Name:</td>
                    <td className='info-col-1'>Yuvaraj M</td>
                </tr>
                <tr>
                    <td className='info-col'>DOB: </td>
                    <td className='info-col-1'>27/05/2002</td>
                </tr>
                <tr>
                    <td className='info-col'>Address:</td>
                    <td className='info-col-1'>Trichy, Tamilnadu , India</td>
                </tr>
                <tr>
                    <td className='info-col'>Postal Code: </td>
                    <td className='info-col-1'>620013</td>
                </tr>
                <tr>
                    <td className='info-col'>Email:</td>
                    <td className='info-col-1'>yuvarajyuva257@gmail.com</td>
                </tr>
                <tr>
                    <td className='info-col'>Phone:</td>
                    <td className='info-col-1'>+91 8220531015</td>
                </tr>
                <tr>
                    <td className='info-col'>Education: </td>
                    <td className='info-col-1'>B.Sc Chemistry -<span> 2019-22</span></td>
                </tr>
                
                <tr>
                    <td></td>
                    <td className='info-col-1 text-yellow-300'>8.3 CGPA</td>
                </tr>
                
                <tr>
                    <td></td>
                    <td className='info-col-1'>Jamal Mohamed College, Trichy</td>
                </tr>

            </table>

            <a href="/YUVARAJ.pdf" download>
              <button className='resume-btn-personal'>Download CV</button>
            </a>
            </div>
            
            <div className="eduexpcer">            
            
            <div className="edu">
            <h2 className='edu-title'>Education</h2>
            <div className="education">
                <h1 className='text-warning fs-5'>Full Stack Development - <span>2024</span></h1>                
                <h5>KGiSL Micro College, Coimbatore</h5>
            </div>
            <div className="education1">
                <h1 className='text-warning fs-5'>Meta Frontend Developer - <span>2024</span></h1>                
                <h5>Coursera</h5>
            </div>
            
            <div className="education2">
                <h1 className='text-warning fs-5'>B.Sc Chemistry - 83.7%</h1>
                <h3>2019-2022</h3>
                <h5>Jamal Mohamed College, Trichy</h5>
            </div>
            </div>
                        
            <div className="certification">
            <h2 className='edu-title'>Certifications</h2>
                <div className="certificate">
                  <ul>
                    <li><span>React Basics</span> From Meta through <span>Coursera</span></li>
                    <li><span>Version Control</span> from Meta through <span>Coursera</span></li>
                    <li><span>Programming with JS</span> From Meta through <span>Coursera</span></li>
                    <li><span>Intro to Front End Dev</span> from Meta through <span>Coursera</span></li>
                    <li><span>Excel</span> For Beginners from <span>Coursera</span></li>
                  </ul>
                </div>
            </div>
            
            <div className="exp">
            <h2 className='edu-title'>Experience</h2>
            <div className="experience">
                <h1>Junior Executive - Straive</h1>
                <h3>2022-Present</h3>
                <p>"Straive: A global content technology enterprise specializing
                in data services, SME, and technology solutions."</p>
                <ul>
                    <li>Processed and formatted XML files for e-Publishing projects.</li>
                    <li>Collaborated with content teams to ensure accurate data conversion.</li>
                    <li>Maintained quality standards and met project deadlines.</li>
                </ul>
            </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Personal