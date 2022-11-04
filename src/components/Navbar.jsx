import { Box, Stack } from '@mui/material';
import mainLogo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { SearchBar } from '../components';

const Navbar = () => {
    const [activeSearch, setActiveSearch] = useState(true);

    function handleSearch(e) {
        // setActiveSearch(!activeSearch);
        e.stopPropagation();
    }

    return (
        <Box className='header'>
            <Stack className='header__content'>
                <a className='header__logoWrapper' href='/'>
                    <img className='header__logo' src={mainLogo} alt="Logo" />
                </a>
                {/* Search */}
                <div className='header__block header__block--search'>
                    <div id='search-window' className={`header__button header__button${activeSearch ? '--active' : ''}`} onClick={handleSearch}>
                        <span className='searchIcon'>
                            <FontAwesomeIcon className='header__icon' icon={faMagnifyingGlass} />
                        </span>
                        <Box className='modal__dimmer' style={{ display: activeSearch ? 'block' : 'none' }}>
                            <SearchBar />
                        </Box>
                    </div>
                </div>
                {/* User */}
                <div className='header__block header_block--user'>
                    <div className='header__button header__button--user'>
                        <FontAwesomeIcon className='header__icon ' icon={faUser} />
                        <span className='header__text header__text--user'>
                            ĐĂNG NHẬP
                        </span>
                    </div>
                </div>
                {/* Menu */}
                <div className='header__block header__block--menu'>
                    <div className='header__button'>
                        <FontAwesomeIcon className='header__icon ' icon={faBars} />
                    </div>
                </div>
            </Stack>
        </Box>

    )
}

export default Navbar