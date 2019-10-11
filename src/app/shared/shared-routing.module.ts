import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserrComponent } from './userr/userr.component';
import { ServiceeComponent } from './servicee/servicee.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'us',
    component:UserrComponent
  },
  {
    path:'ser',
    component:ServiceeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
