import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { ArticleService } from '../../article/article.service';

@Component({
  selector: 'create-article',
  templateUrl: 'create-article.component.html',
  styleUrls: ['../../app.component.css']
})

export class CreateArticleComponent {
  data: Object;
  error: null;

  constructor (private articleService: ArticleService, private router: Router) {}

  createArticle(title: HTMLInputElement, body: HTMLInputElement, category: HTMLInputElement, image: HTMLInputElement) {
    this.articleService.createArticle(title, body, category, image)
      .subscribe(
        (response: Response) => {
          this.data = response.json();

          this.router.navigate(['/articles']);
        },
        (error) => this.error = error.json().error
      );
  }
}
