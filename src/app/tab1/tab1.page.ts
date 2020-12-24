import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CreatePage } from '../create/create.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  counter: Array<any> = [];

  constructor(
    public alertController: AlertController,
    public modalController: ModalController
  ) {
    this.counter = [1,2,3];
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: '임재영이 폭파되었습니다.',
      buttons: ['잘가...'],
      header: '죽어~'
    })
    await alert.present();
  }

  public async presentModal() {
    const modal = await this.modalController.create({
      component: CreatePage
    });
    return await modal.present();
  }
}
