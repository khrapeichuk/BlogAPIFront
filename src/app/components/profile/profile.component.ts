import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { UserService } from '../../user/user.service';


@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['../../app.component.css']
})

export class ProfileComponent implements OnInit{
  data: Object;

  constructor (private userService: UserService, private http: Http) {}

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    //this.userService.getUserById(localStorage.getItem('id'), localStorage.getItem('token'));

    this.http.request('http://localhost:3000/api/v1/users/' + localStorage.getItem('id') + "?token=" + localStorage.getItem('token'))
      .subscribe((res: Response) => {
        this.data = res.json();
      });
  }
}
