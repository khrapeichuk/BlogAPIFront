import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
  private userUrl = 'http://localhost:3000/api/v1/users/';

  data: Object;
  error: null;

  constructor(private http: Http) { }

  getUserById (id: string, token: string) {
    this.http.get(this.userUrl + id + "?token=" + token)
      .subscribe((res: Response) => {
            this.data = res.json();
            console.log(this.data);
      });
  }

  post (email, password): void {
    this.http.post (this.userUrl + 'login',
      JSON.stringify({
        email: email.value,
        password: password.value
      }), {headers: this.headers})
      .subscribe((response: Response) => {
          this.data = response.json();
          localStorage.setItem('id', response.json().user._id);
          localStorage.setItem('email', response.json().user.email);
          localStorage.setItem('token', response.json().token);
          // email.value = '';
          // password.value = '';
        },
        (error) => this.error = error.json().error);
  }
}
