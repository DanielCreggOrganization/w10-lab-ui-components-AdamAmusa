import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, person, notifications, settingsOutline } from 'ionicons/icons';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, NgClass], // Added IonBadge to imports
})
export class TabsPage {
  notificationCount = 3; // This will be displayed in the badge
  selectedTab: string = 'home';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  constructor() {
    addIcons({ home, person, notifications, settingsOutline });
  }
}