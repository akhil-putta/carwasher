import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-bookingforsearching',
  templateUrl: './bookingforsearching.component.html',
  styleUrls: ['./bookingforsearching.component.css']
})
export class BookingforsearchingComponent implements OnInit {

  constructor(public ss:FormBuilder, public router:Router, public http:HttpClient ) { }
 BookForm = this.ss.group({
   vn:[],
   vt:[],
   vo:[],
   voc:[],
   st:[],
   yes:[],
   no:[],
   area:[],
   pd:[],
   pl:[],
 })
 
  ngOnInit() {
  }

}
