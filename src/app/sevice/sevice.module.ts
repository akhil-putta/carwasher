import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeviceRoutingModule } from './sevice-routing.module';
import { ServicecenterloginComponent } from './servicecenterlogin/servicecenterlogin.component';
import { ServicecentersignupComponent } from './servicecentersignup/servicecentersignup.component';
import { ContactComponent } from './contact/contact.component';
import { ServicedashboardComponent } from './servicedashboard/servicedashboard.component';


@NgModule({
  declarations: [ServicecenterloginComponent, ServicecentersignupComponent, ContactComponent, ServicedashboardComponent],
  imports: [
    CommonModule,
    SeviceRoutingModule
  ]
})
export class SeviceModule { }
