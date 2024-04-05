import { useState, useContext } from "react";
import { Brightness2, WbSunnyRounded, Menu, Close } from "@mui/icons-material";
// import { ThemeContext } from "../../contexts/theme";
import './Navbar.css'
import Toggle from "../Toggle/Toggle";

const Navbar = ({ handleChange, isChecked }) => {
    // const themeContext = useContext(ThemeContext)
    const [showNavList, setShowNavList] = useState(false)

    const toggleNavList = () => setShowNavList(!showNavList)

    return (
        <nav className='center nav'>
            <ul
                style={{ display: showNavList ? 'flex' : null }}
                className='nav__list'
            >
                <li className='nav__list-item'>
                    <a
                        href='#projects'
                        onClick={toggleNavList}
                        className='link link--nav'
                    >
                        Projects
                    </a>
                </li>

                <li className='nav__list-item'>
                    <a
                        href='#skills'
                        onClick={toggleNavList}
                        className='link link--nav'
                    >
                        Skills
                    </a>
                </li>

                <li className='nav__list-item'>
                    <a
                        href='#contact'
                        onClick={toggleNavList}
                        className='link link--nav'
                    >
                        Contact
                    </a>
                </li>
            </ul>

            <Toggle
                handleChange={handleChange}
                isChecked={isChecked} />

            <button
                type='button'
                onClick={toggleNavList}
                className='btn btn--icon nav__hamburger'
                aria-label='toggle navigation'
            >
                {showNavList ? <Close /> : <Menu />}
            </button>
        </nav>
    )

}

export default Navbar