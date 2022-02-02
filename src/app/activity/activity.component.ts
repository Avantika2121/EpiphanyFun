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
  postActivity(name: any, description: any): void{
    console.log(name, description);
    this.activityService.
  postActivity(name, description).subscribe(activity => this.activity = activity);
  }
  
  toggleShow() {
    this.isShown = ! this.isShown;
  }


}
