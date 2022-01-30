import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ActivitypageComponent } from './activitypage/activitypage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ActivitypageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
