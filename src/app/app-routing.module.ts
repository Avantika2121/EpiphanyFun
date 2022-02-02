import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ActivitypageComponent } from './activitypage/activitypage.component';
import { ActivityComponent } from './activity/activity.component';
import { IndooractivityComponent } from './indooractivity/indooractivity.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
     {
        path: 'activitypage',
        component: ActivitypageComponent,
    },
    {
        path: 'homepage',
        component: HomepageComponent,
    },
    {
        path: 'activity',
        component: ActivityComponent,
    },
    {
        path: 'indooractivity',
        component: IndooractivityComponent,
    },
    {
        path: 'weather',
        component: WeatherComponent,
    },
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }