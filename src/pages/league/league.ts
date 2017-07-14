import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LeagueTablePage } from '../league-table/league-table';
import { TeamListPage } from '../team-list/team-list';

@Component({
  templateUrl: 'league.html'
})
export class LeaguePage {

  tab1Root = LeagueTablePage;
  tab2Root = TeamListPage;
  // tab3Root = ContactPage;

  constructor(public navParams: NavParams) {
    
  }
}
