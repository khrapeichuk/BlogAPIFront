import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: 'edit.component.html',
  styleUrls: ['../../app.component.css']
})

export class EditCommentComponent implements OnInit {
  data: Object;

  constructor (private commentService: CommentService, private activatedRoute: ActivatedRoute, private  router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: Params) => {
      let articleId = params['articleId'];
      let commentId = params['commentId'];
      this.getCommentById(articleId, commentId);
    });
  }

  getCommentById(articleId, commentId) {
    this.commentService.getCommentById(articleId, commentId)
      .subscribe((response: Response) => {
        this.data = response.json();
      });
  }

  editComment(message) {
    this.activatedRoute.params
      .subscribe((params: Params) => {
      let articleId = params['articleId'];
      let commentId = params['commentId'];

      this.commentService.editComment(articleId, commentId, message)
        .subscribe((response: Response) => {
          this.data = response.json();
      });

      this.router.navigate(['articles', articleId]);
    });
  }
}
