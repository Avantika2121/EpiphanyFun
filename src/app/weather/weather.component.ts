import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  zip: any;
  weather: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  findWeather(zip: string): void {
    this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`
      )
      .subscribe((response) => {
        console.log(response);
        this.weather = response;
      });
  }

}
