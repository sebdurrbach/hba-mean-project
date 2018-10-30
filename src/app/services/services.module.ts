import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { CompanyServiceComponent } from './company-service/company-service.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatTabsModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    FlexLayoutModule,
    MatTabsModule,
    MatIconModule
  ],
  declarations: [CompanyServiceComponent]
})
export class ServicesModule { }
