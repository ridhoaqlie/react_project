import { useState, useContext } from "react";
import { Brightness2, WbSunnyRounded, Menu, Close } from "@mui/icons-material";
// import { ThemeContext } from "../../contexts/theme";
import './Navbar.css'

const Navbar = () => {
    // const themeContext = useContext(ThemeContext)
    const [showNavList, setShowNavList] = useState(true)

    const toggleNavList = () => setShowNavList(!showNavList)

    return (
        <nav className="center nav">
            <ul style={{ display: 'flex' }}
                className="nav_list">
                <li className='nav__list-item'>
                    <a
                        href='#projects'
                        className='link link--nav'
                    >
                        Projects
                    </a>
                </li>
                <li className='nav__list-item'>
                    <a
                        href='#skills'
                        className='link link--nav'
                    >
                        Skills
                    </a>
                </li>
                <li className='nav__list-item'>
                    <a
                        href='#contact'
                        className='link link--nav'
                    >
                        Contact
                    </a>
                </li>
                {/* <button
                    type='button'
                    onClick={themeContext.toggleTheme}
                    className='btn btn--icon nav__theme'
                    aria-label='toggle theme'
                >
                    {themeContext.themeName === 'dark' ? <WbSunnyRounded /> : <Brightness2 />}
                </button>

                <button
                    type='button'
                    onClick={toggleNavList}
                    className='btn btn--icon nav__hamburger'
                    aria-label='toggle navigation'
                >
                    {showNavList ? <Close /> : <Menu />}
                </button> */}

            </ul>

        </nav>
    )

}

export default Navbar