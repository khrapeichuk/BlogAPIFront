import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { ActivatedRoute, Params } from '@angular/router';

import { CommentService } from '../../comment/comment.service';


@Component({
  selector: 'comment',
  templateUrl: 'comment.component.html',
  styleUrls: ['../../app.component.css']
})

export class CommentComponent implements OnInit{
  data: Object;

  constructor (private commentService: CommentService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
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
}
