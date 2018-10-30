import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { FieldListComponent } from './field-list/field-list.component';

@NgModule({
  declarations: [
    FieldListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    FieldListComponent
  ]
})
export class FieldsModule { }
