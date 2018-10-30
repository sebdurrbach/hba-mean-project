import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductsService } from '../product-list/products.service';
import { Product } from '../product-list/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  field: string;
  linkname: string;
  product: Product;

  private productSubscription: Subscription;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.field = this.route.snapshot.params['field'];
    this.linkname = this.route.snapshot.params['name'];
    this.productsService.getProduct(this.field, this.linkname);
    this.productSubscription = this.productsService.getProductUpdate()
      .subscribe((data: Product) => {
        const productData = data[0];
        this.product = {
          _id: productData._id,
          name: productData.name,
          field: productData.field,
          linkname: productData.linkname,
          description: productData.description
        };
      });
  }

}
