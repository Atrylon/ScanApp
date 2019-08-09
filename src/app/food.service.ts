import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  BASE_URL = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=open-food-facts-products&lang=fr&refine.code=";

  constructor(private http:HttpClient) { }

  getFood(code){
    return this.http.get(this.BASE_URL+code);
  }
}
