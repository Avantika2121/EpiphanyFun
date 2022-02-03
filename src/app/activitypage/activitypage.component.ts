import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular//common/http';
import { ActivityService } from '../activity.service';
import { Activity } from '../activity';


@Component({
  selector: 'app-activitypage',
  templateUrl: './activitypage.component.html',
  styleUrls: ['./activitypage.component.css']
})
export class ActivitypageComponent implements OnInit {

  activities: any;
  isShown: boolean = false;
  name = "";
  description = "";

  activity!: Activity;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService.getActivity().subscribe(data=>{
      this.activities =data;
    })
  }
}
