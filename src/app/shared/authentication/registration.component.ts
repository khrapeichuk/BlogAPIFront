import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { UserService } from '../../user/user.service';
import { User } from "../../user/user.model";
import { LocalStorageService } from "../../local-storage.service";

@Component({
  selector: 'registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['../../app.component.css']
})

export class RegistrationComponent {
  data: Object;
  currentUser: User;
  user: User;
  error: null;

  constructor(private userService: UserService, private localStorageService: LocalStorageService, private router: Router) { }

  registration (firstname: HTMLInputElement, lastname: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement, confirmPassword: HTMLInputElement) {
    this.error = null;
    if (password.value == confirmPassword.value){
      this.userService.postForRegistration(firstname, lastname, email, password)
        .subscribe(
          (response: Response) => {
            this.data = response.json();
            this.currentUser = new User(response.json().user._id, response.json().user.firstname, response.json().user.lastname, response.json().user.email, response.json().user.password, response.json().token, '', '', null, '');

            this.localStorageService.setObject('currentUser', this.currentUser);

            this.router.navigate(['profile']);
          },
          (error) => this.error = error.json().error
        );
    }
    // else {
    //   (error) => this.error = JSON.stringify("Passwords don't match");
    // }
  }
}
