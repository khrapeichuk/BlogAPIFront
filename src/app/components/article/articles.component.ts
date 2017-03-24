import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { ArticleService } from '../../article/article.service';
import { LocalStorageService } from '../../local-storage.service';

@Component({
  selector: 'articles',
  templateUrl: 'articles.component.html',
  styleUrls: ['../../app.component.css']
})

export class ArticlesComponent implements OnInit {
  data: Object;

  constructor (private articleService: ArticleService, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.displayArticles();
  }

  displayArticles() {
    this.articleService.getArticles()
      .subscribe((response: Response) => {
        this.data = response.json();
      });
  }

  deleteArticle(id) {
    this.articleService.deleteArticle(id);

    location.reload();
  }

  getCurrentUserID() {
    return this.localStorageService.getParameter('id');
  }

  isAuthorized() {
    if (this.localStorageService.getObject('currentUser')) {
      return true;
    }
    else {
      return false;
    }
  }
}
