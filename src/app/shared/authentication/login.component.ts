import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../../models/user.model';

import { UserService } from '../../services/user.service';
import { LocalStorageService } from '../../services/local-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['../../app.component.css']
})

export class LoginComponent {
  data: Object;
  currentUser: User;
  user: User;
  error: null;
  loginForm: FormGroup;

  constructor(fb: FormBuilder, private userService: UserService, private localStorageService: LocalStorageService, private router: Router) {
    const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

    this.loginForm = fb.group({
      'email' : [null, Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      'password': [null, Validators.required],
    });
  }

  login(email: HTMLInputElement, password: HTMLInputElement) {
    this.error = null;
    this.userService.login(email, password)
      .subscribe(
        (response: Response) => {
          this.data = response.json();
          this.currentUser = new User(response.json().user._id,
                                      response.json().user.firstname,
                                      response.json().user.lastname,
                                      response.json().user.email,
                                      '',
                                      response.json().token,
                                      response.json().user.created_at,
                                      response.json().user.updated_at,
                                      response.json().user.is_subscribed,
                                      response.json().user.rights
          );

          this.localStorageService.setObject('currentUser', this.currentUser);

          this.router.navigate(['profile']);
        },
        (error) => this.error = error.json().error
      );
  }
}
