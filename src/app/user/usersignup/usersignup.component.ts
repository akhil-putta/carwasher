import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  constructor( public fb:FormBuilder,public router:Router) {}

  UsersignupForm = this.fb.group({
    Name:[],
    Mobile:[],
    OTP:[],

  })
  signup(){
    this.router.navigate(["signup"])
  }

  ngOnInit() { }

}
