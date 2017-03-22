import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { APIService } from "../shared/api/api.service";
import { LocalStorageService } from "../local-storage.service";

@Injectable()
export class ArticleService {
  private articleUrl = 'articles/';

  constructor(private localStorageService: LocalStorageService, private APIService: APIService) {}

  getArticles() {
    return this.APIService.get(
      this.articleUrl,
      {
        token: this.localStorageService.getParameter('token')
      }
    );
  }

  getArticleById (id: string) {
    return this.APIService.get(this.articleUrl + id, {});
  }
}
