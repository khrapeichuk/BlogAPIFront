import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

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
        this.getCommentById(params['articleId'], params['commentId']);
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
        this.commentService.editComment(params['articleId'], params['commentId'], message)
          .subscribe((response: Response) => {
            this.data = response.json();
          });

      this.router.navigate(['articles', params['articleId']]);
    });
  }
}
