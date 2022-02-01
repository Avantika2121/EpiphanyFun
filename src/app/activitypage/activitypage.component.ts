import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular//common/http';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-activitypage',
  templateUrl: './activitypage.component.html',
  styleUrls: ['./activitypage.component.css']
})
export class ActivitypageComponent implements OnInit {

 

  constructor(){}

  ngOnInit(): void {
    // this.http.get(`https://localhost:2512/api/activity/`).subscribe((response) => {
    //   console.log(response);
    //   this.activity = response;
    //       });
  }
  // getAllActivity(): void {
  //   this.http.get(`https://localhost:2512/api/activity/`).subscribe((response) => {
  //     console.log(response);
  //     this.activity = response;
  //         });
  //   }

  }

