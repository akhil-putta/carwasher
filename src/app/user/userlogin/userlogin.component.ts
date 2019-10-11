import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms'
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  UserloginForm;
  constructor(public ac:FormBuilder, public serve:UserserviceService, public rs:Router,public http:HttpClient ) { 
  this. UserloginForm = this.ac.group({
    username:[],
    password:[],
  })
}
 
  
 ulogin(){
   this.serve.log(this.UserloginForm).subscribe((res:any[])=>{
     console.log(res)
    
     if(res.length!=0){
       this.rs.navigate(["ulogin"])
     }
     else {
       alert("invalid")
     }

     })
    
 }
  

  ngOnInit() {
  }
}
