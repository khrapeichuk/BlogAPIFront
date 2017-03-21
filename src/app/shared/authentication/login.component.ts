import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { UserService } from '../../user/user.service';
import {User} from "../../user/user.model";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['../../app.component.css']
})

export class LoginComponent {
  data: Object;
  currentUser: User;
  user: User;
  error: null;

  constructor(private userService: UserService, private router: Router) { }

  login(email: HTMLInputElement, password: HTMLInputElement) {
    this.error = null;
    this.userService.post(email, password)
      .subscribe(
        (response: Response) => {
          this.data = response.json();
          this.currentUser = new User(response.json().user._id, '', '', response.json().user.email, response.json().token, '', '', null, '');
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

          this.router.navigate(['profile']);
        },
        (error) => this.error = error.json().error
      );
  }
}
