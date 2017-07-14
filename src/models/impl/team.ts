import ITeam from "../team-interface";

export default class Team implements ITeam {

    constructor(code: string,
                crestUrl: string,
                name: string,
                shortName: string,
                squadMarketValue: string) {

        this.code = code;
        this.crestUrl = crestUrl;
        this.name = name;
        this.shortName = shortName;
        this.squadMarketValue = squadMarketValue;
    }

    code: string;
    crestUrl: string;
    name: string;
    shortName: string;
    squadMarketValue: string;
}