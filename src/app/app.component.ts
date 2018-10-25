import { Component } from '@angular/core';
import { Usermodel } from './usermodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  topicHasError = true;
  userModel = new Usermodel('','',90);
  topics = ['Angular','React','VueJS'];

  validateTopic(value){
    if(value === 'default'){
     this.topicHasError = true;
    }
     else {
     this.topicHasError = false;
     }
  }
}
