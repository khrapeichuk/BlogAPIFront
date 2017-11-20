import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class APIService {
  private headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
  private baseUrl = 'http://localhost:3000/api/v1/';

  constructor(private http: Http) {}

  get(UrlPart, parameters) {
    let UrlParameters = this.convertObjectToUrlParameters(parameters);

    return this.http.get(
      this.baseUrl + UrlPart + '?' + UrlParameters,
      {
        headers: this.headers
      }
    );
  }

  post(UrlPart, data) {
    return this.http.post(
      this.baseUrl + UrlPart,
      JSON.stringify(data),
      {
        headers: this.headers
      }
    );
  }

  put(UrlPart, parameters, data) {
    let UrlParameters = this.convertObjectToUrlParameters(parameters);

    return this.http.put(
      this.baseUrl + UrlPart + '?' + UrlParameters,
      JSON.stringify(data),
      {
        headers: this.headers
      }
    );
  }

  delete(UrlPart, parameters) {
    let UrlParameters = this.convertObjectToUrlParameters(parameters);

    return this.http.delete(
      this.baseUrl + UrlPart + '?' + UrlParameters,
      {
        headers: this.headers
      }
    );
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
}
