import { Component } from '@angular/core';

import { ChatPage } from '../chat/chat';
import { SettingsPage } from '../settings/settings';
import { SocialFeedPage } from '../social-feed/social-feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SocialFeedPage;
  tab2Root = ChatPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
