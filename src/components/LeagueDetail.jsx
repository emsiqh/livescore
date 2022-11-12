import { useParams } from "react-router-dom";

const LeagueDetail = () => {
    const { leagueName } = useParams();

    return (
        <div>{leagueName ? 'hello' : 'not hello'}</div>
    )
}

export default LeagueDetail