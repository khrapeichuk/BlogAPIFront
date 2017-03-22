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

  getArticleById(id: string) {
    return this.APIService.get(this.articleUrl + id, {});
  }

  createArticle(title, body, category, image) {
    return this.APIService.post(
      this.articleUrl + "?token=" + this.localStorageService.getParameter('token'),
      {
        title: title.value,
        body: body.value,
        category: category.value,
        image: image.value
      }
    );
  }
  editArticle(id, title, body, category, image) {
    return this.APIService.put(
      this.articleUrl + id,
      {
        token: this.localStorageService.getParameter('token')
      },
      {
        title: title.value,
        body: body.value,
        category: category.value,
        image: image.value
      }
    );
  }

  deleteArticle(id: string){
    return this.APIService.delete(this.articleUrl + id,
      {
        token: this.localStorageService.getParameter('token')
      }
    );
  }
}
