import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { FoodService } from '../food.service';
import { ModalController } from '@ionic/angular';
import { ModalFoodInfosPage } from '../modal-food-infos/modal-food-infos.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  food;
  color;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
 
  constructor(private barcodeScanner: BarcodeScanner, private foodService:FoodService,
    private modalCtrl:ModalController) {
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }
 
  ngOnInit() {
  }

  async scanCode(){
    this.barcodeScanner
    .scan()
    .then(barcodeData => {
      // alert("Barcode data " + JSON.stringify(barcodeData));
      this.scannedData = barcodeData;
      this.getScannedFood(this.scannedData);
    })
    .catch(err => {
      console.log("Error", err);
    });

    const modal = await this.modalCtrl.create({
      component: ModalFoodInfosPage,
      componentProps:{
        'color' : this.color,
        'food' : this.food
      }
    });
    return await modal.present();
  }

  getScannedFood(scan){
    this.foodService.getFood(scan["text"]).subscribe(
      data => {
        this.food = data['records'][0]['fields'];
        // alert(this.food);

        switch (this.food.nutrition_grade_fr) {
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
        // console.log(this.food);
        console.log(this.color);
      }
    )
  }
 
}