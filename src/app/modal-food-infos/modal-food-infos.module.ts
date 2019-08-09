import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalFoodInfosPage } from './modal-food-infos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFoodInfosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalFoodInfosPage]
})
export class ModalFoodInfosPageModule {}
