import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['../../app.component.css']
})

export class UserProfileComponent implements OnInit {
  data: Object;

  /**
   * UserProfileComponent constructor
   *
   * @param {ActivatedRoute} activatedRoute
   * @param {UserService} userService
   */
  constructor (private activatedRoute: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.getUserDetail(params['id']);
      });
  }

  /**
   * @param id
   */
  getUserDetail(id) {
    this.userService.getUserById(id)
      .subscribe((responseBody: object) => {
        this.data = responseBody;
    });
  }
}
