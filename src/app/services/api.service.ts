import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { LocalStorageService } from './local-storage.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class APIService {
  private headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
  private baseUrl = 'http://localhost:3000/api/v1/';

  constructor(private http: Http, private localStorageService: LocalStorageService) {}

  get(UrlPart): Observable<any> {
    let UrlParameters = this.convertTokenToUrlParameters();

    return this.http.get(
      this.baseUrl + UrlPart + '?' + UrlParameters,
      {
        headers: this.headers
      }
    )
      .map(res => this.extractData(<any>res))
      .catch(this.handleError.bind(this));
  }

  post(UrlPart, data): Observable<any> {
    return this.http.post(
      this.baseUrl + UrlPart,
      JSON.stringify(data),
      {
        headers: this.headers
      }
    )
      .map(res => this.extractData(<any>res))
      .catch(this.handleError.bind(this));
  }

  put(UrlPart, data): Observable<any> {
    let UrlParameters = this.convertTokenToUrlParameters();

    return this.http.put(
      this.baseUrl + UrlPart + '?' + UrlParameters,
      JSON.stringify(data),
      {
        headers: this.headers
      }
    )
    .map(res => this.extractData(<any>res))
    .catch(this.handleError.bind(this));
  }

  delete(UrlPart): Observable<any> {
    let UrlParameters = this.convertTokenToUrlParameters();

    return this.http.delete(
      this.baseUrl + UrlPart + '?' + UrlParameters,
      {
        headers: this.headers
      }
    )
      .map(res => this.extractData(<any>res))
      .catch(this.handleError.bind(this));
  }

  convertTokenToUrlParameters() {
    return '&token' + '=' + encodeURIComponent(this.localStorageService.getParameter('token'));
  }

  private extractData(res: Response, toJSON: boolean = true) {
    if (!toJSON) {
      return res;
    }

    return res.json() || {};
  }

  private handleError(error: Response) {
    console.log(error);

    let err = error.json();

    if (error.status === 403) {
      return Observable.throw({
        status: 'token_expired'
      });
    }
    return Observable.throw(err);
  }
}
