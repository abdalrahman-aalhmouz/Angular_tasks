import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AlertComponent } from './component/alert/alert.component';
import { DataListComponent } from './component/data-list/data-list.component';
import { HandelDataComponent } from './component/handel-data/handel-data.component';
import { MessageService } from './service/message.service';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteModule } from './route/route.module';
import { MaterialTestComponent } from './component/material-test/material-test.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CardsComponent } from './component/cards/cards.component';
import { TableComponent } from './component/table/table.component';
import { CardFooterComponent } from './component/card-footer/card-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    DataListComponent,
    HandelDataComponent,
    MaterialTestComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    CardsComponent,
    TableComponent,
    CardFooterComponent,
  ],
  imports: [
    BrowserModule,
    RouteModule,
    BrowserAnimationsModule,
    MaterialModule
    ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
