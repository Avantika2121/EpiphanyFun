import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './activity';
import { IndooractivityComponent } from './indooractivity/indooractivity.component';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private baseUrl = "http://localhost:2512/api/activity/";
  private postUrl = "http://localhost:2512/api/category/indoor/activity";

  constructor(private http: HttpClient) { }

  getActivity(){
    return this.http.get(`${this.baseUrl}`);
  }

  postActivity(activity: Activity): Observable<Activity>{
    return this.http.post<Activity>(`${this.postUrl}`, activity);
  }
}
