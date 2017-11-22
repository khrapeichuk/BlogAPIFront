import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['../../app.component.css']
})

export class UsersComponent implements OnInit {
  data: Object;

  constructor (private userService: UserService) {}

  ngOnInit(): void {
    this.displayUsers();
  }

  displayUsers() {
    this.userService.getAllUsers()
      .subscribe((responseBody: object) => {
        this.data = responseBody;
    });
  }

  deleteUser(id) {
    this.userService.deleteUser(id);

    location.reload();
  }
}
