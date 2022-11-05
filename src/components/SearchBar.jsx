import { useState } from 'react';
import { Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Searchbar = () => {
    const [league, setLeague] = useState("");

    const handleClose = () => {
        let modalWindow = document.getElementById("modal-state").classList;
        modalWindow.replace("modal__dimmer", "modal__dimmer--close");
        let seachWindow = document.getElementById("search-window").classList;
        seachWindow.remove("header__button--active");
    }

    const handleClick = (event) => {
        event.stopPropagation();
    };

    const handleChange = (event) => {
        setLeague(event.target.value);
    };


    return (
        <Stack
            className='modal__window modal__window--search'
            direction='column'
            onClick={handleClick}
        >
            <div className='modal__header'>
                <h3 className='searchDialog__title'>Tìm kiếm</h3>
                <FontAwesomeIcon title='Đóng cửa sổ' className='modal__closeButton' icon={faXmark} onClick={handleClose} />
            </div>
            <div className='searchInput'>
                <input placeholder='Tìm kiếm' className='searchInput__input' maxLength={30} />
                <div className='dropDown'>
                    <select className='dropDown__selectedValue' value={league} onChange={handleChange}>
                        <option value='none'>Chọn giải đấu</option>
                        <option value='epl'>Premier League</option>
                        <option value='lga'>Laliga</option>
                        <option value='lg1'>League 1</option>
                    </select>
                </div>
            </div>
            <div className='searchHint'>
                Vui lòng điền vào ít nhất 3 kí tự. Các kết quả sẽ bắt đầu hiển thị ngay lập tức.
            </div>
            <div className='searchResults'>
                <div className='searchResults__section'>
                    <div className='searchResults__sectionTitle'>
                        Được tìm kiếm nhiều nhất
                    </div>
                </div>
            </div>
        </Stack>

    )
}

export default Searchbar