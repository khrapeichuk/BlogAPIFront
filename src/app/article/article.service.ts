import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {
  private articleUrl = 'http://localhost:3000/api/v1/articles/';

  constructor(private http: Http) { }

  getArticleById (id: string) {
    return this.http.get(this.articleUrl + id);
  }
}
