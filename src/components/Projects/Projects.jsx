import './Projects.css'
import { projects } from '../../portfolio';
import WeatherApp from '../ProjectContainer/WeatherApp/WeatherApp';
import CalculatorApp from '../ProjectContainer/CalculatorApp/CalculatorApp';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ListApp from '../ProjectContainer/ListApp/ListApp';
import TicTacToe from '../ProjectContainer/TicTacToe/TicTacToe';

const Projects = () => {
    return (
        <section id='projects' className='section projects'>
            <h2 className='section__title'>Projects</h2>

            <div className='projects__flex'>
                <WeatherApp project={projects[0]} />
                <CalculatorApp project={projects[1]} />
                <ListApp project={projects[2]} />
                <TicTacToe project={projects[3]} />
                <ProjectContainer project={projects[4]} />
            </div>
        </section>
    )
}

export default Projects
