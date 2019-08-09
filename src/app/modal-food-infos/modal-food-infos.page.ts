import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-food-infos',
  templateUrl: './modal-food-infos.page.html',
  styleUrls: ['./modal-food-infos.page.scss'],
})
export class ModalFoodInfosPage implements OnInit {
  food;
  color;

  constructor(private modalCtrl:ModalController,
    private navParams:NavParams) { }

  ngOnInit() {
    this.food=this.navParams.get('food');
    this.color=this.navParams.get('color');
    
    // console.log(this.food, this.color);
  }

  closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
