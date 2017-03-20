import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./app.component.css']
})

export class ProfileComponent implements OnInit{
  data: Object;
  loading: boolean;

  constructor(private http: Http, private router: Router) {
  }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById(): void {
    this.loading = true;

    this.http.request('http://localhost:3000/api/v1/users/' + localStorage.getItem('id') + "?token=" + localStorage.getItem('token'))
      .subscribe((res: Response) => {
        this.data = res.json();
        //console.log(this.data);
        this.loading = false;
      });
  }
}
