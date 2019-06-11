import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialFeedPage } from '../social-feed/social-feed';

/**
 * Generated class for the CycletoworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cycletowork',
  templateUrl: 'cycletowork.html',
})
export class CycletoworkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CycletoworkPage');
  }

  goBack(){
    this.navCtrl.push(SocialFeedPage)
  }



}
