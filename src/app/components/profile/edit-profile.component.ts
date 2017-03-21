import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { UserService } from '../../user/user.service';

@Component({
  selector: 'edit-profile',
  templateUrl: 'edit-profile.component.html',
  styleUrls: ['../../app.component.css']
})

export class EditProfileComponent {
  data: Object;
  error: null;

  constructor(private userService: UserService, private router: Router) { }

  editProfile (firstname: HTMLInputElement, lastname: HTMLInputElement, email: HTMLInputElement) {
    this.error = null;
    this.userService.put(firstname, lastname, email)
      .subscribe(
        (response: Response) => {
          this.data = response.json();

          this.router.navigate(['profile']);
        },
        (error) => this.error = error.json().error
      );
  }
}
