import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { APIService } from './api.service';

@Injectable()
export class CommentService {
  private commentUrl = 'articles/';

  /**
   * CommentService constructor
   *
   * @param {APIService} APIService
   */
  constructor(private APIService: APIService) {}

  /**
   * @param {string} articleId
   * @param {string} commentId
   * @returns {Observable<any>}
   */
  getCommentById(articleId: string, commentId: string) {
    return this.APIService.get(this.commentUrl + articleId + '/comments/' + commentId);
  }

  /**
   * @param {string} articleId
   * @param {string} commentId
   * @param message
   * @returns {Observable<any>}
   */
  editComment(articleId: string, commentId: string, message) {
    return this.APIService.put(
      this.commentUrl + articleId + '/comments/' + commentId,
      {
        message: message.value,
      }
    );
  }

  /**
   * @param {string} articleId
   * @param {string} commentId
   * @returns {Promise<never | any>}
   */
  deleteComment(articleId: string, commentId: string) {
    return this.APIService.delete(
      this.commentUrl + articleId + '/comments/' + commentId
    ).toPromise()
      .then(() => null)
      .catch(() => null);
  }
}
