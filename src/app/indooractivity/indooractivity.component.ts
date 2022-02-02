import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Activity } from '../activity';



@Component({
  selector: 'app-indooractivity',
  templateUrl: './indooractivity.component.html',
  styleUrls: ['./indooractivity.component.css']
})
export class IndooractivityComponent implements OnInit {

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
  postIndoorActivity(name: any, description: any): void{
    console.log(name, description);
    this.activityService.
  postIndoorActivity(name, description).subscribe(activity => this.activity = activity);
  }
  
  toggleShow() {
    this.isShown = ! this.isShown;
  }
}