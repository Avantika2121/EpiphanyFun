import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ActivitypageComponent } from './activitypage/activitypage.component';

const routes: Routes = [
     {
        path: 'activitypage',
        component: ActivitypageComponent,
    },
    {
        path: 'homepage',
        component: HomepageComponent,
    },
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }