import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { ArticleService } from '../../article/article.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'articles',
  templateUrl: 'index.component.html',
  styleUrls: ['../../app.component.css']
})

export class ArticlesComponent implements OnInit {
  data: Object;

  constructor(private articleService: ArticleService, private userService: UserService) {}

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
    return this.userService.getCurrentUserID();
  }

  isAuthorized() {
    return this.userService.isAuthorized();
  }
}
