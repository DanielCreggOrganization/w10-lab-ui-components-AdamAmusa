import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonModal, IonInput, IonLabel, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ModalController } from '@ionic/angular/standalone';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButtons, IonButton, IonModal, IonInput, IonLabel, IonItem],
})
export class Tab3Page {
  constructor(private modalController: ModalController) {}

  async dismissModal() {
    const modal = await this.modalController.getTop();
    if (modal) {
      modal.dismiss();
    }
  }
}
