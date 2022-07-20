import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AlertComponent } from './component/alert/alert.component';
import { RouterModule,Routes } from "@angular/router";
import { DataListComponent } from './component/data-list/data-list.component';
import { HandelDataComponent } from './component/handel-data/handel-data.component';
import { MessageService } from './service/message.service';

const appRoutes:Routes=[
  {path:'alert',component:AlertComponent},
  {path:'send_data',component:DataListComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    DataListComponent,
    HandelDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
