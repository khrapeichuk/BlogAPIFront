import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { UserService } from '../../user/user.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['../../app.component.css']
})

export class LoginComponent {
  data: Object;
  error: null;

  constructor(private userService: UserService, private router: Router) { }

  login(email: HTMLInputElement, password: HTMLInputElement) {
    this.error = null;
    this.userService.post(email, password)
      .subscribe(
        (response: Response) => {
          this.data = response.json();
          localStorage.setItem('id', response.json().user._id);
          localStorage.setItem('email', response.json().user.email);
          localStorage.setItem('token', response.json().token);

          this.router.navigate(['profile']);
        },
        (error) => this.error = error.json().error
      );
  }
}
