import Navbar from '../Components/Navbar'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => { fetch('http://localhost:5000/')
  .then(res => res.json())
  .then(data => setProjects(data.slice(0, 3)))
  .catch(err => console.error(err));
 }, []);

  return (
    <>
      <Navbar />
      <div> 
        <h1>Top Projects</h1> 
        <div className="top-projects">
           {projects.map((project, index) => (
             <div key={index} className="project-card">
               <h2>{project.name}</h2>
               <a href={project.link} target="_blank" rel="noopener noreferrer">
                 View Project
                </a>
              </div>
            ))}
            </div>
            <Link to="/all-projects">
              <button>See All Projects</button>
            </Link>            
          </div>
      
    </>
  )
}

export default Projects