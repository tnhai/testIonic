import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { APIServices } from  '../../services/apiServices';

import Team from  '../../models/impl/team';

@Component({
  selector: 'page-team-list',
  templateUrl: 'team-list.html'
})
export class TeamListPage {
  
  teams: Array<Team>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiServices: APIServices) {
    this.initTeamList(navParams.get('id'));
  }

  async initTeamList(id: number) {
    this.teams = await this.apiServices.getTeams(id);
  }
}
