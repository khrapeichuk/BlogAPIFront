import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../../services/article.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-articles',
  templateUrl: './index.component.html',
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
      .subscribe((responseBody: object) => {
        this.data = responseBody;
    });
  }

  deleteArticle(id) {
    this.articleService.deleteArticle(id);

    location.reload();
  }

  isAuthorized() {
    return this.userService.isAuthorized();
  }

  isArticleAuthor(id) {
    return this.userService.isArticleOrCommentAuthor(id);
  }
}
