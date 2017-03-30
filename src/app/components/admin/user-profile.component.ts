import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'admin-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['../../app.component.css']
})

export class UserProfileComponent implements OnInit {
  data: Object;

  constructor (private activatedRoute: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.getUserDetail(params['id']);
      });
  }

  getUserDetail(id) {
    this.userService.getUserById(id)
      .subscribe((response: Response) => {
        this.data = response.json();
    });
  }
}
