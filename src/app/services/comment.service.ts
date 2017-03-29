import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { APIService } from "./api.service";
import { LocalStorageService } from "../local-storage.service";

@Injectable()
export class CommentService {
  private commentUrl = 'articles/';

  constructor(private APIService: APIService, private localStorageService: LocalStorageService) {}

  getCommentById(articleId: string, commentId: string) {
    return this.APIService.get(this.commentUrl + articleId + '/comments/' + commentId, {});
  }

  editComment(articleId: string, commentId: string, message) {
    return this.APIService.put(
      this.commentUrl + articleId + '/comments/' + commentId,
      {
        token: this.localStorageService.getParameter('token')
      },
      {
        message: message.value,
      }
    );
  }

  deleteComment(articleId: string, commentId: string) {
    return this.APIService.delete(
      this.commentUrl + articleId + '/comments/' + commentId,
      {
        token: this.localStorageService.getParameter('token')
      }
    ).toPromise()
      .then(() => null)
      .catch(() => null);
  }
}
