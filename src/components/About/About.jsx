import { GitHub, LinkedIn } from '@mui/icons-material'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
    const { name, role, description, sourceCode, social } = about

    return (
        <div className='about center'>
            {name && (
                <h1>
                    Hi, I am <span className='about__name'>{name}.</span>
                </h1>
            )}

            {role && <h2 className='about__role'>A {role}.</h2>}
            <p className='about__desc'>{description && description}</p>

            <div className='about__contact center'>
                {sourceCode && (
                    <a href={sourceCode}>
                        <span type='button' className='btn btn--outline'>
                            Source Code
                        </span>
                    </a>
                )}

                {social && (
                    <>
                        {social.github && (
                            <a
                                href={social.github}
                                aria-label='github'
                                className='link link--icon'
                            >
                                <GitHub />
                            </a>
                        )}

                        {social.linkedin && (
                            <a
                                href={social.linkedin}
                                aria-label='linkedin'
                                className='link link--icon'
                            >
                                <LinkedIn />
                            </a>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default About
