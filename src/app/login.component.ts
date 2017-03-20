import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./app.component.css']
})

export class LoginComponent {
  data: Object;
  error: null;
  loading: boolean;

  constructor(private http: Http) {
  }

  login(email: HTMLInputElement, password: HTMLInputElement): void {
    this.loading = true;
    this.error = null;

    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');

    this.http.post(
      'http://localhost:3000/api/v1/users/login',
      JSON.stringify({
        email: email.value,
        password: password.value
      }), {headers: headers})
      .subscribe((res: Response) => {
        this.data = res.json();
        localStorage.setItem('id', res.json().user._id);
        localStorage.setItem('email', res.json().user.email);
        localStorage.setItem('token', res.json().token);
        email.value = '';
        password.value = '';
        this.loading = false;
      },
        (err) => this.error = err.json().error);
  }
}
