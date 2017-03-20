import { Component } from '@angular/core';

import { UserService } from '../../user/user.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['../../app.component.css']
})

export class LoginComponent {
  error: null;

  constructor(private userService: UserService) { }

  login(email: HTMLInputElement, password: HTMLInputElement) {
    this.userService.post(email, password);
  }
}
