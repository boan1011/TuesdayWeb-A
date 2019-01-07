import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { coursesComponent } from './courses/courses.component';
import { coursesRoutingModule } from './courses-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  
  imports: [
    CommonModule,
    HttpClientModule,
    coursesRoutingModule
  ],
  declarations: [
    coursesComponent
  ]
})
export class coursesModule { }
