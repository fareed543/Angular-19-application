import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Product } from './product/product.model';
import { ProductsService } from './product/products.service';


export class MockProductsService {
  getProducts() {
    return of<Product[]>([
      {
        id: 1,
        title: 'Mock Product',
        price: 100,
        description: 'Mock description',
        category: 'Mock Category',
        image: 'mock.jpg',
        rating: {
          rate: 4.5,
          count: 20
        }
      }
    ]);
  }
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, HttpClientTestingModule],
      providers : [ { provide: ProductsService, useClass: MockProductsService }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should load products from mock service', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Mock Product');
    // expect(compiled.querySelector('h3')?.textContent)
    // .toContain('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
  });

  // it(`should have the 'Fake Store Products' title`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('Fake Store Products');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Fake Store Products');
  // });
  

  describe('Math Utils', () => {
  it('should add numbers', () => {
    expect(2 + 2).toBe(4);
  });

  fit('should multiply numbers', () => {   // 🔹 only this test runs
    expect(3 * 3).toBe(9);
  });

  xit('should divide numbers', () => {     // 🔹 skipped
    expect(10 / 2).toBe(5);
  });
});
});
