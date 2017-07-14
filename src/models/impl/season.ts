import ISeason from "../season-interface";

export default class Season implements ISeason {

    constructor(caption: string,
                currentMatchday: number,
                id: number,
                lastUpdated: string,
                league: string,
                numberOfGames: number,
                numberOfMatchdays: number,
                numberOfTeams: number,
                year: string) {

        this.caption = caption;
        this.currentMatchday = currentMatchday;
        this.id = id;
        this.lastUpdated = lastUpdated;
        this.league = league;
        this.numberOfGames = numberOfGames;
        this.numberOfMatchdays = numberOfMatchdays;
        this.numberOfTeams = numberOfTeams;
        this.year = year;
    }

    caption: string;
    currentMatchday: number;
    id: number;
    lastUpdated: string;
    league: string;
    numberOfGames: number;
    numberOfMatchdays: number;
    numberOfTeams: number;
    year: string;

    thumbnail?: string;

    get Thumbnail(): string {
        return "../assets/seasons/" + this.league + ".png";
    }
}