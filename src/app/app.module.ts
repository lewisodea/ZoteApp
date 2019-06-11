import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ChatPage } from '../pages/chat/chat';
import { SettingsPage } from '../pages/settings/settings';
import { SocialFeedPage } from '../pages/social-feed/social-feed';
import { TabsPage } from '../pages/tabs/tabs';
//Social Page - Linked Pages
import { CycletoworkPage } from '../pages/cycletowork/cycletowork';
import { TalentIncentivePage } from '../pages/talent-incentive/talent-incentive';
import { BrandValuesPage } from '../pages/brand-values/brand-values';
import { FaqsPage } from '../pages/faqs/faqs'
//

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    SettingsPage,
    SocialFeedPage,
    TabsPage,
    CycletoworkPage,
    TalentIncentivePage,
    BrandValuesPage,
    FaqsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    SettingsPage,
    SocialFeedPage,
    TabsPage,
    CycletoworkPage,
    TalentIncentivePage,
    BrandValuesPage,
    FaqsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
