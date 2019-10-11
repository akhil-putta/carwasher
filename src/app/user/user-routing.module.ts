import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { SetpaswwordComponent } from './setpaswword/setpaswword.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BookingforsearchingComponent } from './userdashboard/bookingforsearching/bookingforsearching.component';
import { ViewoldordersComponent } from './userdashboard/viewoldorders/viewoldorders.component';
import { EditprofileComponent } from './userdashboard/editprofile/editprofile.component';
import { ChangepasswordComponent } from './userdashboard/changepassword/changepassword.component';
import { LogoutComponent } from './userdashboard/logout/logout.component';


const routes: Routes = [
  {
    path:'us/use',
    component:UsersignupComponent
  },
  {
    path:'signup',
    component:SetpaswwordComponent
  },
  {
    path:'set',
    component:UserloginComponent
  },
  {
    path:'ulogin',
    component:UserdashboardComponent
  },

  {
    path:'book',
    component:BookingforsearchingComponent
  },
  {
    path:'view',
    component:ViewoldordersComponent
  },
  {
    path:'edit',
    component:EditprofileComponent
  },
  {
    path:'change',
    component:ChangepasswordComponent
  },
  {
    path:'log',
    component:LogoutComponent
  },
 
];
  // {
  //   path:'us/user',
  //   component:UserloginComponent
  // },
  // {
  //   path:'abc',
  //   component:UserdashboardComponent
  // },
  // {
  //   path:'us/user/login/book',
  //   component:BookingforsearchingComponent
  // },
  // {
  //   path:'us/user/login/view',
  //   component:ViewoldordersComponent
  // },
  // {
  //   path:'us/user/login/edit',
  //   component:EditprofileComponent
  // },
  // {
  //   path:'us/user/login/chnage',
  //   component:ChangepasswordComponent
  // },
  // {
  //   path:'us/user/login/logout',
  //   component:LogoutComponent
  // },
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
