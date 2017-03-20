import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
  private userUrl = 'http://localhost:3000/api/v1/users/';

  constructor(private http: Http) { }

  getUserById (id: string) {
    return this.http.get(this.userUrl + id + "?token=" + localStorage.getItem('token'));
  }

  post (email, password) {
     return this.http.post (this.userUrl + 'login',
      JSON.stringify({
        email: email.value,
        password: password.value
      }), {headers: this.headers})
  }
}
