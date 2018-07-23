import { Component, OnInit } from '@angular/core';
import {students} from './students';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {
  student1:students;
  distext="No";
  constructor(Form:FormsModule) { 
    this.student1={
      name:'MCA Student',
      rollno:2
    };

  }
  hero = 'App11';
  ngOnInit() {
  }

}
