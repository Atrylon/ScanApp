import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  BASE_URL = "https://world.openfoodfacts.org/api/v0/product/";

  constructor(private http:HttpClient) { }

  getFood(code){
    return this.http.get(this.BASE_URL+code);
  }
}
