import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductsService } from './product-list/products.service';

import { MaterialModule } from '../material/material.module';
import { InnovationsRoutingModule } from './innovations-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { FieldsModule } from '../fields/fields.module';

@NgModule({
  imports: [
    CommonModule,
    InnovationsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FieldsModule
  ],
  declarations: [
    ProductListComponent,
    ProductItemComponent
  ],
  providers: [
    ProductsService
  ]
})
export class InnovationsModule { }
