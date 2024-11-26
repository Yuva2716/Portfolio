import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({project}) => {
    const {title,description,link,image,} = project.newProject
    console.log(project)
    

  return (
    <>
        <div className="projectsCard d-inline-block my-3 mx-3">
            <div className="card">
                <img src={image} alt={title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="card-des d-flex justify-content-between">
                        <p>{description}</p>
                    </div>
                    <div className='ViewProject-btn'>
                        <button><a href={link} target='_blank'>View Project</a></button>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default ProjectCard