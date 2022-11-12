import { Box } from '@mui/system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faFutbol, faArrowDown } from '@fortawesome/free-solid-svg-icons'


const MenuTop = () => {
    const league = [
        {
            id: 1,
            name: 'Premier league',
            link: '',
        },
        {
            id: 2,
            name: 'La Liga',
            link: '',
        },
        {
            id: 3,
            name: 'Serie A',
            link: '',
        },
        {
            id: 4,
            name: 'Bundesliga',
            link: '',
        },
        {
            id: 5,
            name: 'Ligue 1',
            link: '',
        },
        {
            id: 6,
            name: 'Eredivisie',
            link: '',
        },
    ]

    return (
        <Box className='menuTop'>
            <div className='menuTop__content'>
                <a href='/' className='menuTop__item menuTop__myfs'>
                    <FontAwesomeIcon className='menuTop__icon' icon={faStar} />
                    <div className='menuTop__text'>Quan tâm</div>
                </a>
                <div className='menuTop__items'>
                    {league.map((item) => {
                        return (
                            <a key={item.id} href={item.link} className='menuTop__item'>
                                <FontAwesomeIcon className='menuTop__icon' icon={faFutbol} />
                                <div className='menuTop__text'>{item.name}</div>
                            </a>
                        )
                    })}

                </div>
                <div className='menuMinority'>
                    <div className='menuMinority__title'>
                        <div className='menuMinority__text'>Các giải khác</div>
                        <FontAwesomeIcon className='menuMinority__arrow' icon={faArrowDown} />
                    </div>
                </div>
            </div>

        </Box>
    )
}

export default MenuTop