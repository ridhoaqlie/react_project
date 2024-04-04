import './ProjectContainer.css'
import WeatherApp from './WeatherApp/WeatherApp'

const ProjectContainer = ({ project }) => {
    if (project) {
        return (
            <div className='project'>
                <h3>{project.name}</h3>
                <p className='project__description'>{project.description}</p>
                <WeatherApp />
            </div>
        )
    } else {
        return (
            <div className='project'>
                <h3>Project 2</h3>
                <p className='project__description'>Not Implement Yet</p>
            </div>
        )
    }
}

export default ProjectContainer
