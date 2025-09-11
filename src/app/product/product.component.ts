import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  imports : [CommonModule]
})

export class ProductComponent {

  @Input() product !: Product;
  
}
