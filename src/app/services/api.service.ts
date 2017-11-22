import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class APIService {
  private headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
  private baseUrl = 'http://localhost:3000/api/v1/';

  constructor(private http: Http) {}

  get(UrlPart, parameters): Observable<any> {
    let UrlParameters = this.convertObjectToUrlParameters(parameters);

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

  put(UrlPart, parameters, data): Observable<any> {
    let UrlParameters = this.convertObjectToUrlParameters(parameters);

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

  delete(UrlPart, parameters): Observable<any> {
    let UrlParameters = this.convertObjectToUrlParameters(parameters);

    return this.http.delete(
      this.baseUrl + UrlPart + '?' + UrlParameters,
      {
        headers: this.headers
      }
    )
      .map(res => this.extractData(<any>res))
      .catch(this.handleError.bind(this));
  }

  convertObjectToUrlParameters(object) {
    let UrlParameters = '';
    for (let key in object) {
      if (UrlParameters !== '') {
        UrlParameters += '&';
      }
      UrlParameters += key + '=' + encodeURIComponent(object[key]);
    }
    return UrlParameters;
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
