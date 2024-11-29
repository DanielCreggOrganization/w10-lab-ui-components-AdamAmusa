import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonButtons} from '@ionic/angular/standalone';
import { AlertController, ToastController } from '@ionic/angular/standalone';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonButtons],
})
export class Tab1Page {
  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'This is a toast message',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }
}
