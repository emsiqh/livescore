import { Box, Stack } from '@mui/material';
import mainLogo from '../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { SearchBar } from '../components';

const Navbar = () => {
    const [activeSearch, setActiveSearch] = useState(false);

    // useEffect((event) => {
    //     console.log(".");
    //     setActiveSearch(!activeSearch);
    // }, [activeSearch])

    function handleSearch(event) {
        console.log(activeSearch);
        event.preventDefault();
        setActiveSearch(!activeSearch);
    }

    return (
        <Box className='header'>
            <Stack className='header__content'>
                <a className='header__logoWrapper' href='/'>
                    <img className='header__logo' src={mainLogo} alt="Logo" />
                </a>
                {/* Search */}
                <div className='header__block header__block--search'>
                    <div id='search-window' className={"header__button" + `${activeSearch ? ' header__button--active' : ''}`} onClick={handleSearch}>
                        <span className='searchIcon'>
                            <FontAwesomeIcon className='header__icon' icon={faMagnifyingGlass} />
                        </span>
                        <div id='modal-state' className={`${activeSearch ? 'modal__dimmer' : 'modal__dimmer--close'}`}>
                            <SearchBar />
                        </div>
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