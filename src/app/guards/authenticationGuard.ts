import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate() {
    if(!this.userService.isAuthorized()) {
      this.router.navigate(['login']);
    }
    return this.userService.isAuthorized();
  }
}
