import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './products.service';
import { Subscription } from 'rxjs';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public header = {
    title: 'Another header',
    subtitle: 'Another subtitle',
    background: 'lightgray'
  };

  field;
  products: Product[];

  private productsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.field = this.route.snapshot.params['field'];
    this.header.title = this.field;
    this.productsService.getProductsByField(this.field);
    this.productsSubscription = this.productsService.getProductsUpdate()
      .subscribe((products: Product[]) => {
        this.products = products;
        console.log(this.products);
      });
  }

}
