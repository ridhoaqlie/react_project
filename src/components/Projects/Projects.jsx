import './Projects.css'
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import { projects } from '../../portfolio';

const Projects = () => {

    return (
        <section id='projects' className='section projects'>
            <h2 className='section__title'>Projects</h2>

            <div className='projects__flex'>
                <ProjectContainer project={projects[0]} />
                <ProjectContainer project={null} />
            </div>
        </section>
    )
}

export default Projects
