import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrandValuesPage } from './brand-values';

@NgModule({
  declarations: [
    BrandValuesPage,
  ],
  imports: [
    IonicPageModule.forChild(BrandValuesPage),
  ],
})
export class BrandValuesPageModule {}
