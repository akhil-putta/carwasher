import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicecentersignupComponent } from './servicecentersignup/servicecentersignup.component';
import { ServicecenterloginComponent } from './servicecenterlogin/servicecenterlogin.component';
import { ContactComponent } from './contact/contact.component';
import { ServicedashboardComponent } from './servicedashboard/servicedashboard.component';


const routes: Routes = [
  {
    path:'ser/service',
    component:ServicecentersignupComponent
  },
  {
    path:'ser/service/sign',
    component:ContactComponent
  },
  {
    path:'ser/service/sign/contact',
    component:ServicecenterloginComponent
  },
  {
    path:'ser/service/sign/contact/login',
    component:ServicedashboardComponent
  },



 
  {
    path:'ser/servicee',
    component:ServicecenterloginComponent
  },
  {
    path:'ser/servicee/login',
    component:ServicedashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeviceRoutingModule { }
