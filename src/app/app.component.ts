import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './product/products.service';
import { Product } from './product/product.model';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ProductComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular';

  productList: Product[] = []
  constructor(private productService: ProductsService) { }
  ngOnInit() {
    this.getProducts()
  }
  isGridView: boolean = true; // default view

  toggleView() {
    this.isGridView = !this.isGridView;
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (res: Product[]) => {
        this.productList = res;
        console.log("Products:", res);
      },
      error: (err) => {
        console.log("Error occurred:", err);
        // here you can show a toast / snackbar / alert
      },
      complete: () => {
        console.log("Request completed.");
      }
    });
  }

}
