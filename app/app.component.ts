import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  model : UserModel = {
    userName: '',
    emailAddress: '',
    password: ''
  };
  get diagnostic() { return JSON.stringify(this.model); }
  createUser() {
    alert('User created!');
  }
}

export class UserModel {
  userName : string;
  emailAddress: string;
  password: string;
}