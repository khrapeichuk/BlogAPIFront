import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

import { ArticleService } from '../../services/article.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['../../app.component.css']
})

export class ArticleDetailComponent implements OnInit {
  data: Object;

  constructor (private articleService: ArticleService, private activatedRoute: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: Params) => {
      let articleId = params['id'];
      this.getArticleDetail(articleId);});
  }

  getArticleDetail(id) {
    this.articleService.getArticleById(id)
      .subscribe((response: Response) => {
        this.data = response.json();
    });
  }

  addComment(articleId, comment) {
    this.articleService.addComment(articleId, comment);

    location.reload();
  }

  isCommentAuthor(id) {
    return this.userService.isArticleOrCommentAuthor(id);
  }
}
