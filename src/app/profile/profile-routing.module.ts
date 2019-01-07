import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { profileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: profileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class profileRoutingModule { }
