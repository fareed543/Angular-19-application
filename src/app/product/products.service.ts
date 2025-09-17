import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient : HttpClient) { }

  getProducts(){
    return of([{ id: 1, title: 'Product 1' }]);
  }


  getAPIProducts(){
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products')
  }


  
}
