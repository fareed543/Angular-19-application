import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { of, retry, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient : HttpClient) { }

  getProducts() {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products').pipe(
      retry(2), // retry 2 times before failing
      catchError(err => {
        return throwError(() => err); // rethrow error
      })
    );
  }


  
}
