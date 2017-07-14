interface ISeason {
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
}
export default ISeason;