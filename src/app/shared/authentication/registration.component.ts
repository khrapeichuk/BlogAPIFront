import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from "../../user/user.model";

import { UserService } from '../../user/user.service';
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
  error: string;
  registrationForm : FormGroup;

  constructor(fb: FormBuilder, private userService: UserService, private localStorageService: LocalStorageService, private router: Router) {
    let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

    this.registrationForm = fb.group({
      'firstname': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      'lastname': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      'password': [null, Validators.required],
    })
  }

  registration(firstname: HTMLInputElement, lastname: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement) {
    this.error = null;
    this.userService.registration(firstname, lastname, email, password)
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
}
