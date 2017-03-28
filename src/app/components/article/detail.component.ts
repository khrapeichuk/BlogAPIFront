import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

import { ArticleService } from '../../article/article.service';
import { LocalStorageService } from '../../local-storage.service';

@Component({
  selector: 'article-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['../../app.component.css']
})

export class ArticleDetailComponent implements OnInit {
  data: Object;

  constructor (private articleService: ArticleService, private activatedRoute: ActivatedRoute, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      let articleId = params['id'];
      this.getArticleDetail(articleId);
    });
  }

  getArticleDetail(id) {
    this.articleService.getArticleById(id)
      .subscribe((response: Response) => {
        this.data = response.json();
      });
  }

  addComment(articleId, comment){
    this.articleService.addComment(articleId, comment);

    location.reload();
  }

  getCurrentUserID() {
    return this.localStorageService.getParameter('id');
  }
}
