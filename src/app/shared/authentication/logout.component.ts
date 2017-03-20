import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'logout',
  template: '',
  styleUrls: ['../../app.component.css']
})

export class LogoutComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.logout();
  }

  logout(): void {
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('token');

    this.router.navigate(['login']);
  }
}
