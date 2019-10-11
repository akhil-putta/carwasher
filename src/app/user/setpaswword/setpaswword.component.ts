import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  selector: 'app-setpaswword',
  templateUrl: './setpaswword.component.html',
  styleUrls: ['./setpaswword.component.css']
})
export class SetpaswwordComponent implements OnInit {

  constructor(public ab:FormBuilder, public router:Router) { }
  SetpasswordForm = this.ab.group({
    enterpassword:[],
    confirmpassword:[],
  })
  set(){
    this.router.navigate(["set"])
  }

  ngOnInit() {
  }

}
