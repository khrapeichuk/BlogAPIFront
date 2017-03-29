import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { UserService } from '../../services/user.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'index.component.html',
  styleUrls: ['../../app.component.css']
})

export class ProfileComponent implements OnInit {
  data: Object;

  constructor(private userService: UserService, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    this.userService.getUserById(this.localStorageService.getParameter('id'))
      .subscribe((response: Response) => {
        this.data = response.json();
      });
  }
}
