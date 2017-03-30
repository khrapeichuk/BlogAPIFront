import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { UserService } from '../services/user.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate() {
    if (!this.userService.isAdmin()) {
      this.router.navigate(['login']);
    }
    return this.userService.isAdmin();
  }
}
