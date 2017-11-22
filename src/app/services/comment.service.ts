import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { APIService } from './api.service';

@Injectable()
export class CommentService {
  private commentUrl = 'articles/';

  constructor(private APIService: APIService) {}

  getCommentById(articleId: string, commentId: string) {
    return this.APIService.get(this.commentUrl + articleId + '/comments/' + commentId);
  }

  editComment(articleId: string, commentId: string, message) {
    return this.APIService.put(
      this.commentUrl + articleId + '/comments/' + commentId,
      {
        message: message.value,
      }
    );
  }

  deleteComment(articleId: string, commentId: string) {
    return this.APIService.delete(
      this.commentUrl + articleId + '/comments/' + commentId
    ).toPromise()
      .then(() => null)
      .catch(() => null);
  }
}
