import LeaderboardItem from "../LeaderboardItem/LeaderboardItem";
import "./leaderboard.scss"



const Leaderboard = () => {

    return(
        <div className="leaderboard">
            <div className="leaderboard__title">
                <img src={require("../../assets/best.png")}></img>
                <h1>leaderboards</h1>
            </div>
            <div className="leaderboard__items">
                <LeaderboardItem link='headline' title="most upvoted headlines"></LeaderboardItem>
                <LeaderboardItem link='entries' title="most upvoted entries"></LeaderboardItem>
                <LeaderboardItem link='upvoted' title="most upvoted in total"></LeaderboardItem>
                <LeaderboardItem link='code' title="invitation codes"></LeaderboardItem>
            </div>
        </div>
    )

}

export default Leaderboard;