import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { UserService } from '../../user/user.service';

import {LocalStorageService} from "../../local-storage.service";

@Component({
  selector: 'edit-profile',
  templateUrl: 'edit-profile.component.html',
  styleUrls: ['../../app.component.css']
})

export class EditProfileComponent implements OnInit {
  data: Object;
  error: null;

  constructor(private userService: UserService, private  localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.userService.getUserById(this.localStorageService.getParameter('id'))
      .subscribe((response: Response) => {
        this.data = response.json();
      });
  }

  editProfile (firstname: HTMLInputElement, lastname: HTMLInputElement, email: HTMLInputElement, rights:HTMLInputElement) {
    this.error = null;
    let id = this.localStorageService.getParameter('id');

    this.userService.editProfile(id, firstname, lastname, email, rights)
      .subscribe(
        (response: Response) => {
          this.data = response.json();

          this.router.navigate(['profile']);
        },
        (error) => this.error = error.json().error
      );
  }
}
