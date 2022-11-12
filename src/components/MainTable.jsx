import { useParams } from "react-router-dom";
import { LeagueDetail, FeedDetail } from '../components';

const MainTable = () => {
    const { leagueName } = useParams();

    return (
        <div className='container__liveTableWrapper'>
            <div className='container__liveTable'>
                {leagueName ? <LeagueDetail /> : <FeedDetail />}
            </div>
        </div>
    )
}

export default MainTable