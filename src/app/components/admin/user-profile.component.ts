import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['../../app.component.css']
})

export class UserProfileComponent implements OnInit {
  data: Object;

  constructor (private activatedRoute: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        let userId = params['id'];
        this.getUserDetail(userId);
    });
  }

  getUserDetail(id) {
    this.userService.getUserById(id)
      .subscribe((response: Response) => {
        this.data = response.json();
    });
  }
}
