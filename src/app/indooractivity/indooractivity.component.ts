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

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService.getActivity().subscribe(data=>{
      this.activities =data;
    })
  }
}