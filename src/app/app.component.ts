import { Component } from '@angular/core';
import { Usermodel } from './usermodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userModel = new Usermodel('','',90);
}
