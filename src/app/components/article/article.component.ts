import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { ArticleService } from '../../article/article.service';

@Component({
  selector: 'article',
  templateUrl: 'article.component.html',
  styleUrls: ['../../app.component.css']
})

export class ArticleComponent implements OnInit{
  data: Object;

  constructor (private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    this.articleService.getArticleById('582f0266019cd449e3771955')
      .subscribe((response: Response) => {
        this.data = response.json();
      });
  }
}
