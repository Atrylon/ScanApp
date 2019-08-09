import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFoodInfosPage } from '../modal-food-infos/modal-food-infos.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 
  constructor(private modalCtrl:ModalController) {
  }
 
  ngOnInit() {
  }

  async scanCode(){
    const modal = await this.modalCtrl.create({
      component: ModalFoodInfosPage,
    });
    return await modal.present();
  }
 
}