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
    this.productService.getAPIProducts().subscribe(
      ((res: Product[]) => {
        if (res) {
          this.productList = res;
          console.log(res);
        }
      }),
      err => { }
    )
  }

}
