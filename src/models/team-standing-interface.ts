import IHomeAwayStat from './home-away-stat-interface';

interface ITeamStanding {
    position: number;
    teamName: string;
    crestURI: string;
    playedGames: number;
    points: number;
    goals: number;
    goalsAgainst: number;
    goalDifference: number;
    wins: number;
    draws: number;
    losses: number;
    home: IHomeAwayStat;
    away: IHomeAwayStat;
}
export default ITeamStanding;