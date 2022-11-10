import { useState } from 'react';
import { Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faStar } from '@fortawesome/free-solid-svg-icons';

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

    // Function to import pics
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));

    // Fetch Api in the future, now using objects array
    const footballTeams = [
        { id: 1, name: "Manchester United", logo: images['mu.png'], country: "Anh" },
        { id: 2, name: "Manchester City", logo: images['mc.png'], country: "Anh" },
        { id: 3, name: "Liverpool", logo: images['liv.png'], country: "Anh" },
        { id: 4, name: "Arsenal", logo: images['ars.png'], country: "Anh" },
        { id: 5, name: "Real Marid", logo: images['rm.png'], country: "Tây Ban Nha" },
        { id: 6, name: "Ajax", logo: images['ajax.png'], country: "Hà Lan" },
        { id: 7, name: "Bayern Munich", logo: images['bayern.png'], country: "Đức" },
        { id: 8, name: "AC Milan", logo: images['acm.png'], country: "Ý" },
        { id: 9, name: "Napoli", logo: images['napoli.png'], country: "Ý" },
        { id: 10, name: "AS Roma", logo: images['asr.png'], country: "Ý" },
    ]


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
                    <div className='searchResults__sectionTitle'>Được tìm kiếm nhiều nhất</div>
                    {
                        footballTeams.map((club) => {
                            return (
                                <a key={club.id} className='searchResult' href='#'>
                                    <div className='searchResult__participantImageWrapper'>
                                        <img className='searchResult__participantImage' src={club.logo} alt={club.name}></img>
                                    </div>
                                    <div className='searchResult__participantName'>{club.name}</div>
                                    <div className='searchResult__participantCountry'>{club.country}</div>
                                    <div title='Thêm vào yêu thích' className='searchResult__myTeamIcon'>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </Stack>

    )
}

export default Searchbar