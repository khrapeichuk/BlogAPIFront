import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { APIService } from "../shared/api/api.service";

@Injectable()
export class CommentService {
  private commentUrl = 'articles/';

  constructor(private APIService: APIService) {}

  getCommentById(articleId: string, commentId: string) {
    return this.APIService.get(this.commentUrl + articleId + '/comments/' + commentId, {});
  }
}
