import { header } from '../../portfolio'
import './Header.css'
import Navbar from '../Navbar/Navbar.jsx'

const Header = ({ handleChange, isChecked }) => {
    const { homepage, title } = header

    return (
        <header className='header center'>
            <h3>
                {homepage ? (
                    <a href={homepage} className='link'>
                        {title}
                    </a>
                ) : (
                    title
                )}
            </h3>
            <Navbar
                handleChange={handleChange}
                isChecked={isChecked} />
        </header>
    )
}

export default Header
