import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { coursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: '', component: coursesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class coursesRoutingModule { }
