
import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'EpiphanyFun';
  
  constructor(public router: Router) {}

  ngOnInit() {

  }

 

}
