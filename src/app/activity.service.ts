import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './activity';
import { IndooractivityComponent } from './indooractivity/indooractivity.component';
import { ActivatedRoute } from '@angular/router';
import { ActivitypageComponent } from './activitypage/activitypage.component';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private baseUrl = "http://epiphany-fun-backend.herokuapp.com/api/activity/";
  private postUrl = "http://epiphany-fun-backend.herokuapp.com/api/category/outdoor/activity";
  private postindoorUrl = "http://epiphany-fun-backend.herokuapp.com/api/category/indoor/activity";



  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  getActivity(){
    return this.http.get(`${this.baseUrl}`);
  }

  postActivity(name: any, description: any): Observable<Activity>{
    console.log(name, description);
    return this.http.post<Activity>(`${this.postUrl}`, {name: name, description:description});
  }
  postIndoorActivity(name: any, description: any): Observable<Activity>{
    console.log(name, description);
    return this.http.post<Activity>(`${this.postindoorUrl}`, {name: name, description:description});
  }
}
