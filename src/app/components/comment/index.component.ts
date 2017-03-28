import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';

import { CommentService } from '../../comment/comment.service';


@Component({
  selector: 'comment',
  templateUrl: 'index.component.html',
  styleUrls: ['../../app.component.css']
})

export class CommentComponent implements OnInit{
  data: Object;

  constructor (private commentService: CommentService, private activatedRoute: ActivatedRoute, private location: Location) {}

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

  deleteComment() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let articleId = params['articleId'];
      let commentId = params['commentId'];

      this.commentService.deleteComment(articleId, commentId);

      this.location.back();
    });
  }

  back() {
    this.location.back();
  }
}
