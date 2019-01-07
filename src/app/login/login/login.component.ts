import { Component, OnInit } from '@angular/core';
import { coursesComponent } from '../../courses/courses/courses.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sum = 10;
  static SumValue: any;

  constructor() { }

  ngOnInit() {
  }

  get SumValue() {
    return this.sum;
  }

}
