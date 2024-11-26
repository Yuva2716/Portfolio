import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import ProjectCard from '../Components/ProjectCard'
import '../Styles/AllProjects.css'
import { Link } from 'react-router-dom';

const AllProjects = () => {
  const [projects,setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredProjects, setFilteredProjects] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')

  const getProjects = async () => {
    const response = await fetch('http://localhost:5000/')
    const result =  await response.json()
    if(result.status === 200){
      setProjects(result.projects)
      setFilteredProjects(result.projects)
      // console.log(result.projects)
    }else{
      console.log('failed to get projects',result)
    }
    setLoading(false)
  }

  const filterProjects = (category) =>{
    setSelectedCategory(category)
    console.log('selected category: ', category)
    if(category === 'All'){
      setFilteredProjects(projects)
    }else{
      const filtered = projects.filter((project) => project.newProject.category === category)
      console.log('filtered project: ', filtered)
      setFilteredProjects(filtered)
    }
  }

  useEffect(()=>{
    getProjects()

  },[])

  useEffect(()=>{
    filterProjects(selectedCategory)
  }, [projects, selectedCategory])



  if(loading){
    return(
      <>
        <Navbar />
          <div className='loading'>
          <div className='d-flex justify-content-center Loading-btn'>       
            <button className="btn" type="button" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Loading...
            </button>
          </div>
          </div>
      </>      
    )
  }

  return (
    <>
        <Navbar />
        <div className="add-project-page">
        <div className="add-projects">
          <Link to='/add-projects'>
            <button className="add-btn"><span className='plus'>+</span> Add Project</button>
          </Link>
        </div>
        <div className="project-category">
          <ul>
              <li onClick={() => filterProjects('All')} className={selectedCategory === 'All' ? 'active' : ''}>All</li>
              <li onClick={() => filterProjects('MERN Stack')} className={selectedCategory === 'MERN Stack' ? 'active' : ''}>MERN</li>
              <li onClick={() => filterProjects('React')} className={selectedCategory === 'React' ? 'active' : ''}>React</li>
              <li onClick={() => filterProjects('JavaScript')} className={selectedCategory === 'JavaScript' ? 'active' : ''}>JavaScript</li>
              <li onClick={() => filterProjects('HTML')} className={selectedCategory === 'HTML' ? 'active' : ''}>HTML&CSS</li>
          </ul>
        </div>        
        <div className='project-list'>          
        {filteredProjects.map((project)=>(
          <ProjectCard key={project._id} project={project}  /> 
        ))}
      </div>
      </div>
        
    </>
  )
}

export default AllProjects