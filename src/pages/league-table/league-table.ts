import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { APIServices } from  '../../services/apiServices';

import Team from  '../../models/impl/team';
import TeamStanding from  '../../models/impl/team-standing';
import HomeAwayStat from  '../../models/impl/home-away-stat';

@Component({
  selector: 'page-league-table',
  templateUrl: 'league-table.html'
})
export class LeagueTablePage {

    leagueCaption: string;
    matchday: number;
    standing: Array<TeamStanding>;

    constructor(public navCtrl: NavController, public navParams: NavParams, private apiServices: APIServices) {
        this.initTable(navParams.get('id'));
    }

    async initTable(id: number) {
        let leagueTable = await this.apiServices.getTable(id);
        this.leagueCaption = leagueTable.leagueCaption;
        this.matchday = leagueTable.matchday;
        this.standing = leagueTable.standing.map(obj => {
            return new TeamStanding(
                obj.position,
                obj.teamName,
                obj.crestURI,
                obj.playedGames,
                obj.points,
                obj.goals,
                obj.goalsAgainst,
                obj.goalDifference,
                obj.wins,
                obj.draws,
                obj.losses,
                new HomeAwayStat(
                    obj.home.goals,
                    obj.home.goalsAgainst,
                    obj.home.wins,
                    obj.home.draws,
                    obj.home.losses
                ),
                new HomeAwayStat(
                    obj.away.goals,
                    obj.away.goalsAgainst,
                    obj.away.wins,
                    obj.away.draws,
                    obj.away.losses
                )
            )
        }).sort((obj1,obj2) => {
            if (obj1.position - obj2.position === 0) {
                if (obj1.teamName < obj2.teamName) {
                    return -1;
                }
                if (obj1.teamName > obj2.teamName) {
                    return 1;
                }
            }
            return obj1.position - obj2.position;
        });
    }

}