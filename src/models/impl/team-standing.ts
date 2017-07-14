import ITeamStanding from "../team-standing-interface";

import HomeAwayStat from "./home-away-stat";

export default class TeamStanding implements ITeamStanding {

    constructor(position: number,
                teamName: string,
                crestURI: string,
                playedGames: number,
                points: number,
                goals: number,
                goalsAgainst: number,
                goalDifference: number,
                wins: number,
                draws: number,
                losses: number,
                home: HomeAwayStat,
                away: HomeAwayStat) {

        this.position = position;
        this.teamName = teamName;
        this.crestURI = crestURI;
        this.playedGames = playedGames;
        this.points = points;
        this.goals = goals;
        this.goalsAgainst = goalsAgainst;
        this.goalDifference = goalDifference;
        this.wins = wins;
        this.draws = draws;
        this.losses = losses;
        this.home = home;
        this.away = away;
    }

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
    home: HomeAwayStat;
    away: HomeAwayStat;
}