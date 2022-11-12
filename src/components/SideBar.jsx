import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    // Function to import pics
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));

    const leagues = [
        {
            id: 1,
            name: 'Premier league',
            link: 'premier',
            logo: images['eng.png'],
        },
        {
            id: 2,
            name: 'La Liga',
            link: 'laliga',
            logo: images['spain.png'],
        },
        {
            id: 3,
            name: 'Serie A',
            link: '',
            logo: images['ita.png'],
        },
        {
            id: 4,
            name: 'Bundesliga',
            link: '',
            logo: images['ger.png'],
        },
        {
            id: 5,
            name: 'Ligue 1',
            link: '',
            logo: images['fra.png'],
        },
        {
            id: 6,
            name: 'Eredivisie',
            link: '',
            logo: images['neth.png'],
        },
    ]

    return (
        <div className='container__myMenu'>
            <div className='category-left-menu'>
                <div className='league__heading'>
                    <FontAwesomeIcon className='league__heading--icon' icon={faFutbol} />
                    <div className='league__heading--head'>Giải đấu</div>
                </div>
                {
                    leagues.map((league) => {
                        return (
                            <Link to={`/league/${league.link}`}>
                                <div key={league.id} className='league__template league__templateTop'>
                                    <img className='league__templateFlag' src={league.logo} alt={league.name} />
                                    <span className='league__templateText'>{league.name}</span>
                                </div>
                            </Link>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default SideBar