import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';

const material=[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatMenuModule,
  MatTableModule
  
];
@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
