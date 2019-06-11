import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CycletoworkPage } from '../cycletowork/cycletowork';
import { BrandValuesPage } from '../brand-values/brand-values';
import { TalentIncentivePage } from '../talent-incentive/talent-incentive';
import { FaqsPage } from '../faqs/faqs';

//Functions Below Contained Within @Component
@Component({
  selector: 'page-social-feed',
  templateUrl: 'social-feed.html'
})
export class SocialFeedPage {

  constructor(public navCtrl: NavController) {

  }

  //Console Log - Page Load Successful
  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialFeedPage');
  }

  //Side Menu Functions - Buttons Linking to Assigned Pages
  brandValuesLink() {
    this.navCtrl.push(BrandValuesPage);
  }

  cycleToWorkLink() {
    this.navCtrl.push(CycletoworkPage);
  }

  talentIncentiveLink() {
    this.navCtrl.push(TalentIncentivePage);
  }

  faqsLink() {
    this.navCtrl.push(FaqsPage);
  }


}
