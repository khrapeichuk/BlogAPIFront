import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'logout',
  template: '',
  styleUrls: ['../../app.component.css']
})

export class LogoutComponent implements OnInit{
  loading: boolean;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.logout();
  }

  logout(): void {
    this.loading = true;

    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('token');

    this.router.navigate(['login']);

  }
}
