import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;

    component.product = {
      id: 1,
      title: 'Test Product',
      price: 100,
      description: 'Test description',
      category: 'Test Category',
      image: 'test.jpg',
      rating: {
        rate: 4.5,
        count: 10
      }
    } as Product;


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
