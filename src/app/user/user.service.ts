import { Injectable } from '@angular/core';
import { APIService } from "../api/api.service";

import 'rxjs/add/operator/toPromise';
import {LocalStorageService} from "../local-storage.service";

@Injectable()
export class UserService {
  private userUrl = 'users/';

  constructor(private localStorageService: LocalStorageService, private APIService: APIService) { }

  getUserById(id: string) {
    return this.APIService.get(
      this.userUrl + this.localStorageService.getParameter('id'),
      {
        token: this.localStorageService.getParameter('token')
      }
    );
  }

  login(email, password) {
    return this.APIService.post(
      this.userUrl + 'login',
      {
        email: email.value,
        password: password.value
      }
    );
  }

  registration(firstname, lastname, email, password) {
    return this.APIService.post (
      this.userUrl,
      {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value
      }
    );
  }

  editProfile(firstname, lastname, email) {
    return this.APIService.put (
      this.userUrl + this.localStorageService.getParameter('id'),
      {
        token: this.localStorageService.getParameter('token')
      },
      {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value
      }
    );
  }

  isAuthorized() {
    if (this.localStorageService.getObject('currentUser')) {
      return true;
    }
    else {
      return false;
    }
  }
}
