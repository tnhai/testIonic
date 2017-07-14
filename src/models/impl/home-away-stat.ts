import IHomeAwayStat from "../home-away-stat-interface";

export default class HomeAwayStat implements IHomeAwayStat {

    constructor(goals: number,
                goalsAgainst: number,
                wins: number,
                draws: number,
                losses: number) {

        this.goals = goals;
        this.goalsAgainst = goalsAgainst;
        this.wins = wins;
        this.draws = draws;
        this.losses = losses;
    }

    goals: number;
    goalsAgainst: number;
    wins: number;
    draws: number;
    losses: number;
}