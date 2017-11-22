import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { UserService } from '../services/user.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  /**
   * AuthenticationGuard constructor
   *
   * @param {UserService} userService
   * @param {Router} router
   */
  constructor(private userService: UserService, private router: Router) {}

  /**
   * @returns {boolean}
   */
  canActivate() {
    if (!this.userService.isAuthorized()) {
      this.router.navigate(['login']);
    }
    return this.userService.isAuthorized();
  }
}
