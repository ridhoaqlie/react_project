import './Projects.css'
import { projects } from '../../portfolio';
import WeatherApp from '../ProjectContainer/WeatherApp/WeatherApp';
import CalculatorApp from '../ProjectContainer/CalculatorApp/CalculatorApp';

const Projects = () => {
    return (
        <section id='projects' className='section projects'>
            <h2 className='section__title'>Projects</h2>

            <div className='projects__flex'>
                <WeatherApp project={projects[0]} />
                <CalculatorApp project={projects[1]} />
            </div>
        </section>
    )
}

export default Projects
