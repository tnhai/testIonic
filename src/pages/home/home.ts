import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { APIServices } from  '../../services/apiServices';

import Season from  '../../models/impl/season';

import { TeamListPage } from '../../pages/team-list/team-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  leagues: Array<Season>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiServices: APIServices) {

  }

  ionViewDidLoad() {
    this.initFootballSeason();
  }

  async initFootballSeason() {
    this.leagues = await this.apiServices.getLeagues();
    this.leagues.forEach(league => {
      league.thumbnail = league.Thumbnail;
    });
  }

  leagueTapped(event, league) {
    this.navCtrl.push(TeamListPage, {
      id: league.id
    });
  }
}
