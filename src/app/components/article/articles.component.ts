import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { ArticleService } from '../../article/article.service';

@Component({
  selector: 'articles',
  templateUrl: 'articles.component.html',
  styleUrls: ['../../app.component.css']
})

export class ArticlesComponent implements OnInit {
  data: Object;

  constructor (private articleService: ArticleService) {}

  ngOnInit(): void {
    this.displayArticles();
  }

  displayArticles() {
    this.articleService.getArticles()
      .subscribe((response: Response) => {
        this.data = response.json();
      });
  }
}
