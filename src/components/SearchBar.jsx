import { useState } from 'react';
import { Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Searchbar = () => {
    const [league, setLeague] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        setLeague(event.target.value);
    };


    return (
        <Stack
            className='modal__window modal__window--search'
            direction='column'
        >
            <div className='modal__header'>
                <h3 className='searchDialog__title'>Tìm kiếm</h3>
                <FontAwesomeIcon title='Đóng cửa sổ' className='modal__closeButton' icon={faXmark} />
            </div>
            <div className='searchInput'>
                <input placeholder='Tìm kiếm' className='searchInput__input' maxLength={30} />
                <div className='dropDown'>
                    <select className='dropDown__selectedValue' value={league} onChange={handleChange}>
                        <option value='none' selected>Chọn giải đấu</option>
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