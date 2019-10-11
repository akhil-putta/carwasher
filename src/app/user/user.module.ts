import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { SetpaswwordComponent } from './setpaswword/setpaswword.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BookingforsearchingComponent } from './userdashboard/bookingforsearching/bookingforsearching.component';
import { ViewoldordersComponent } from './userdashboard/viewoldorders/viewoldorders.component';
import { EditprofileComponent } from './userdashboard/editprofile/editprofile.component';
import { ChangepasswordComponent } from './userdashboard/changepassword/changepassword.component';
import { LogoutComponent } from './userdashboard/logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [UserloginComponent, UsersignupComponent, SetpaswwordComponent, UserdashboardComponent, BookingforsearchingComponent, ViewoldordersComponent, EditprofileComponent, ChangepasswordComponent, LogoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    HttpClientModule

  ]
})
export class UserModule { }
