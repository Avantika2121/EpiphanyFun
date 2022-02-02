import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './activity';
import { IndooractivityComponent } from './indooractivity/indooractivity.component';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private baseUrl = "http://localhost:2512/api/activity/";
  private postUrl = "http://localhost:2512/api/category/outdoor/activity";



  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  getActivity(){
    return this.http.get(`${this.baseUrl}`);
  }

  postActivity(name: any, description: any): Observable<Activity>{
    console.log(name, description);
    return this.http.post<Activity>(`${this.postUrl}`, {name: name, description:description});
  }
}
