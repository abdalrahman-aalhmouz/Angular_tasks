import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import { AlertComponent } from '../component/alert/alert.component';
import { DataListComponent } from '../component/data-list/data-list.component';
import { MaterialTestComponent } from '../component/material-test/material-test.component';
import { LoginComponent } from '../component/login/login.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';


const appRoutes:Routes=[
  {path:'alert',component:AlertComponent},
  {path:'send_data',component:DataListComponent},
  {path:'material',component:MaterialTestComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent}
  

]
const routes=[ 
  RouterModule.forRoot(
  appRoutes,
  { enableTracing: true } // <-- debugging purposes only
),
]
@NgModule({
  declarations: [],
  imports: [routes],
  exports:[routes]
})
export class RouteModule { }
