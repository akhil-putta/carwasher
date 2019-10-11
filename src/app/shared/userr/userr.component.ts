import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-userr',
  templateUrl: './userr.component.html',
  styleUrls: ['./userr.component.css']
})
export class UserrComponent implements OnInit {

  constructor(public router:Router) { }
  set(){
    this.router.navigate(["set"])
  }

  ngOnInit() {
  }

}
