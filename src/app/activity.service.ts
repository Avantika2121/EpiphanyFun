import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private baseUrl = "http://localhost:2512/api/activity/";

  constructor(private http: HttpClient) { }

  getActivity(){
    return this.http.get(`${this.baseUrl}`);
  }
}
