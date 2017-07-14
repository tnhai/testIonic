import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { APIServices } from  '../../services/apiServices';

import Season from  '../../models/impl/season';

import { LeaguePage } from '../../pages/league/league';

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
    this.navCtrl.push(LeaguePage, {
      id: league.id
    });
  }
}
