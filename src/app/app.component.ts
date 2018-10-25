import { Component } from '@angular/core';
import { Usermodel } from './usermodel';
import { FormserviceService } from './formservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  topicHasError = true;
  submitted = false;
  errorMessage = '';
  userModel = new Usermodel('Sreeni', 'email@email.com', 5678912359, 'React');

  topics = ['Angular', 'React', 'VueJS'];
  constructor(private formService: FormserviceService) { }
  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this.formService.sendUser(this.userModel).subscribe(
      data => console.log('success : ', data),
      error => this.errorMessage = error.statusText
    );
  }

  errorMsg() {
    this.formService.sendUserWithError(this.userModel).subscribe(
      data => console.log('success : ', data),
      error => this.errorMessage = error.statusText
    );
  }
}
