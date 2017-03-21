import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {LocalStorageService} from "../local-storage.service";

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
  private userUrl = 'http://localhost:3000/api/v1/users/';

  constructor(private http: Http, private localStorageService: LocalStorageService) { }

  getUserById (id: string) {
    return this.http.get(this.userUrl + this.localStorageService.getParameter('id') +
      "?token=" + this.localStorageService.getParameter('token'));
  }

  post (email, password) {
     return this.http.post (this.userUrl + 'login',
      JSON.stringify({
        email: email.value,
        password: password.value
      }), { headers: this.headers })
  }

  put (firstname, lastname, email) {
    console.log(this.userUrl + this.localStorageService.getParameter('id') +
      "?token=" + this.localStorageService.getParameter('token'));
    return this.http.put (this.userUrl + this.localStorageService.getParameter('id') +
      "?token=" + this.localStorageService.getParameter('token'),
      JSON.stringify({
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
      }), { headers: this.headers })
  }
}
