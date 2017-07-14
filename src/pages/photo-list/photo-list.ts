import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { PhotoDetailsPage } from '../photo-details/photo-details';

@Component({
  selector: 'page-photo-list',
  templateUrl: 'photo-list.html'
})
export class PhotoListPage {
  
  items: Array<{albumId: number, id: number, title: string, url: string, thumbnailUrl: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = navParams.get('responseData');
  }

  itemTapped(event, item) {
    this.navCtrl.push(PhotoDetailsPage, {
      item: item
    });
  }
}
