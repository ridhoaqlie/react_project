import React from 'react'

const ProjectContainer = ({ project }) => {
    return (
        <div className='project'>
            <h3>{project.name}</h3>
            <p className='project__description'>{project.description}</p>
        </div>
    )
}

export default ProjectContainer
