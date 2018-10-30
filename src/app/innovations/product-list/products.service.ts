import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[];
  private product: Product;
  private productUpdated = new Subject();
  private productsUpdated = new Subject();

  constructor(
    private http: HttpClient,
  ) { }

  getProduct(field, linkname) {
    console.log(field, linkname);
    this.http.get<Product>('http://localhost:3000/api/innovations/' + field + '/' + linkname)
      .subscribe((product) => {
        this.product = product;
        this.productUpdated.next(this.product);
      });
  }

  getProductsByField(field) {
    this.http.get<Product[]>('http://localhost:3000/api/innovations/' + field).subscribe((products) => {
      this.products = products;
      this.productsUpdated.next(this.products);
    });
  }

  getProductUpdate() {
    return this.productUpdated.asObservable();
  }

  getProductsUpdate() {
    return this.productsUpdated.asObservable();
  }

}
