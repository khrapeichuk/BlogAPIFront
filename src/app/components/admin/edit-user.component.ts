import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../user/user.service';

@Component({
  selector: 'edit-user',
  templateUrl: 'edit-user.component.html',
  styleUrls: ['../../app.component.css']
})

export class EditUserComponent implements OnInit {
  data: Object;
  error: null;

  constructor(private userService: UserService, private  activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      let userId = params['id'];
      this.getUserData(userId);
    });
  }

  getUserData(id) {
    this.userService.getUserById(id)
      .subscribe((response: Response) => {
        this.data = response.json();
      });
  }

  editUser(firstname: HTMLInputElement, lastname: HTMLInputElement, email: HTMLInputElement, rights: HTMLInputElement) {
    this.error = null;

    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];

    this.userService.editProfile(id, firstname, lastname, email, rights)
      .subscribe(
        (response: Response) => {
          this.data = response.json();

          this.router.navigate(['admin/users']);
        },
        (error) => this.error = error.json().error
      );
    });
  }
}
