import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['../../app.component.css']
})

export class EditUserComponent implements OnInit {
  data: Object;
  error: null;
  editUserForm: FormGroup;

  /**
   * EditUserComponent constructor
   * @param {FormBuilder} formBuilder
   * @param {UserService} userService
   * @param {ActivatedRoute} activatedRoute
   * @param {Router} router
   */
  constructor(formBuilder: FormBuilder, private userService: UserService, private  activatedRoute: ActivatedRoute, private router: Router) {
    const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

    this.editUserForm = formBuilder.group({
      'firstname': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      'lastname': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern(emailRegex)])]
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.getUserData(params['id']);
      });
  }

  /**
   * @param id
   */
  getUserData(id) {
    this.userService.getUserById(id)
      .subscribe((responseBody: object) => {
        this.data = responseBody;
    });
  }

  /**
   * @param {HTMLInputElement} firstname
   * @param {HTMLInputElement} lastname
   * @param {HTMLInputElement} email
   * @param {HTMLInputElement} userRight
   * @param {HTMLInputElement} adminRight
   */
  editUser(firstname: HTMLInputElement, lastname: HTMLInputElement, email: HTMLInputElement, userRight: HTMLInputElement, adminRight: HTMLInputElement) {
    this.error = null;

    this.activatedRoute.params
      .subscribe((params: Params) => {
      let userRights = userRight.checked ? userRight.value : '';
      let adminRights = adminRight.checked ? adminRight.value : '';

    this.userService.editProfile(params['id'], firstname, lastname, email, userRights + ',' + adminRights)
      .subscribe((responseBody: object) => {
          this.data = responseBody;

          this.router.navigate(['admin/users']);
        },
        (error) => this.error = error.json().error
      );
    });
  }
}
