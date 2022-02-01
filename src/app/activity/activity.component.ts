import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Activity } from '../activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  

  //  activities: Activity[] = [];

  activities: any;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService.getActivity().subscribe(data=>{
      this.activities =data;
    })
  }

}
