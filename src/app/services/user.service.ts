import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { APIService } from './api.service';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class UserService {
  private userUrl = 'users/';

  constructor(private localStorageService: LocalStorageService, private APIService: APIService) { }

  getUserById(id: string) {
    return this.APIService.get(this.userUrl + id);
  }

  getAllUsers() {
    return this.APIService.get(this.userUrl);
  }

  login(email, password) {
    return this.APIService.post(this.userUrl + 'login',
      {
        email: email.value,
        password: password.value
      }
    );
  }

  registration(firstname, lastname, email, password) {
    return this.APIService.post(this.userUrl,
      {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value
      }
    );
  }

  editProfile(id, firstname, lastname, email, rights) {
    return this.APIService.put(this.userUrl + id,
      {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        rights: rights.split(',')
      }
    );
  }

  deleteUser(id: string) {
    return this.APIService.delete(this.userUrl + id)
      .toPromise()
      .then(() => null)
      .catch(() => null);
  }

  getCurrentUserID() {
    if (this.isAuthorized()) {
      return this.localStorageService.getParameter('id');
    }
  }

  isAuthorized() {
    if (this.localStorageService.getObject('currentUser')) {
      return true;
    }
  }

  isAdmin() {
    if (this.isAuthorized()) {
      let rights = this.localStorageService.getParameter('rights');

      if (rights.indexOf('ADMIN') !== -1) {
        return true;
      }
    }
  }

  isArticleOrCommentAuthor(authorID) {
    if (this.getCurrentUserID() === authorID) {
      return true;
    }
  }
}
