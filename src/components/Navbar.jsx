import { Box, Grid, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import mainLogo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className='header'>
            <Stack className='header__content'>
                <a className='header__logoWrapper' href='/'>
                    <img className='header__logo' src={mainLogo} alt="Logo" />
                </a>
                <div className='header__block header__block--search'>
                    <div className='header__button'>
                        <span className='searchIcon'>
                            <FontAwesomeIcon className='header__icon' icon={faMagnifyingGlass} />
                        </span>
                    </div>
                </div>
                <div className='header__block header_block--user'>
                    <div className='header__button header__button--user'>
                        <FontAwesomeIcon className='header__icon ' icon={faUser} />
                        <span className='header__text header__text--user'>
                            ĐĂNG NHẬP
                        </span>
                    </div>
                </div>
                <div className='header__block header__block--menu'>
                    <div className='header__button'>
                        <FontAwesomeIcon className='header__icon ' icon={faBars} />
                    </div>
                </div>
            </Stack>
        </div>

    )
}

export default Navbar