import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './home/home.component';
import { UserrComponent } from './userr/userr.component';
import { ServiceeComponent } from './servicee/servicee.component';


@NgModule({
  declarations: [HomeComponent, UserrComponent, ServiceeComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
