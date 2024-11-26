import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/Skills.css'
import skillimg from '../assets/AI-img-6.png'

const Skills = () => {
  return (
    <>
      <Navbar />
      <div className="skills-page">
        <img  src={skillimg} alt="skill img" />
          <h1>Skills</h1>
          <h2>Technical Skills</h2>
          <div className="my-skills">
            <div className="skill">            
            <p>HTML</p>
            <div className="progress">
                <div className="progress-bar" style={{width:"90%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">HTML</div>                
            </div>
            
            <p>CSS</p>
            <div className="progress">                
                <div className="progress-bar" style={{width:"90%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">CSS</div>
            </div>

             <p>JavaScript</p>   
            <div className="progress">                
                <div className="progress-bar" style={{width:"83%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
            </div>

             <p>React.js</p>   
            <div className="progress">                
                <div className="progress-bar" style={{width:"78%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">React</div>
            </div>

            <p>Node.js</p>    
            <div className="progress">                
                <div className="progress-bar" style={{width:"75%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Node.js</div>
            </div>

             <p>Express.js</p>   
            <div className="progress">                
                <div className="progress-bar" style={{width:"79%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Express.js</div>
            </div>

            <p>MongoDB</p>
            <div className="progress">                
                <div className="progress-bar" style={{width:"80%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">MongoDB</div>
            </div>

             <p>UI/UX</p>   
            <div className="progress">                
                <div className="progress-bar" style={{width:"60%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">UI / UX</div>
            </div>

            </div>

            <h2 className='ss'>Soft Skills</h2>
            <div className="softskill">
            
            <p>Problem Solving</p>    
            <div className="progress">                
                <div className="progress-bar" style={{width:"85%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Problem Solving</div>
            </div>

             <p>Time Management</p>   
            <div className="progress">                
                <div className="progress-bar" style={{width:"88%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Time Management</div>
            </div>

            <p>Leadership</p>
            <div className="progress">                
                <div className="progress-bar" style={{width:"80%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Leadership</div>
            </div>

             <p>Team Work</p>   
            <div className="progress">                
                <div className="progress-bar" style={{width:"90%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Team Work</div>
            </div>

            <p>Communication</p>    
            <div className="progress">                
                <div className="progress-bar" style={{width:"70%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Communication</div>
            </div>

            <p>Reliablity</p>    
            <div className="progress">                
                <div className="progress-bar" style={{width:"70%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Reliablity</div>
            </div>

            <p>TroubleShooting</p>    
            <div className="progress">                
                <div className="progress-bar" style={{width:"80%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">TroubleShooting</div>
            </div>

            <p>Quick Learning Ability</p>    
            <div className="progress">                
                <div className="progress-bar" style={{width:"85%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Quick Learning Ability</div>
            </div>

            </div>


          </div>
      </div>
    </>
  )
}

export default Skills