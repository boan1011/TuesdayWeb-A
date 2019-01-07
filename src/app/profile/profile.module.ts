import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { profileComponent } from './profile/profile.component';
import { profileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    profileRoutingModule
  ],
  declarations: [
    profileComponent
  ]
})
export class profileModule { }
