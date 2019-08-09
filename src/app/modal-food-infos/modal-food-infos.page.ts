import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-modal-food-infos',
  templateUrl: './modal-food-infos.page.html',
  styleUrls: ['./modal-food-infos.page.scss'],
})
export class ModalFoodInfosPage implements OnInit {
  food;
  ingredients;
  color;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
 
  constructor(private barcodeScanner: BarcodeScanner, private foodService:FoodService,
    private modalCtrl:ModalController) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }
 
  ngOnInit() {
    this.barcodeScanner
    .scan()
    .then(barcodeData => {
      this.scannedData = barcodeData;
      this.getScannedFood(this.scannedData);
    })
    .catch(err => {
      console.log("Error", err);
    });
  }

  getScannedFood(scan){
    this.foodService.getFood(scan["text"]).subscribe(
      data => {
        this.food = data['product'];
        this.ingredients = this.food.ingredients_text.split(',');

        switch (this.food.nutrition_grades_tags[0]) {
          case 'a':
              this.color='#00823f';
              break;
          case 'b':
            this.color='#86bc2b';
              break;
          case 'c':
            this.color='#fecc00';
              break;
          case 'd':
            this.color='#ef8200';
              break;
          case 'e':
            this.color='#e73c08';
              break;
          default:
            break;
        }
      }
    )
  }

  closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
