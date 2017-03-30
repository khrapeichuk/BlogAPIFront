import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create.component.html',
  styleUrls: ['../../app.component.css']
})

export class CreateArticleComponent {
  data: Object;
  error: null;
  createArticleForm: FormGroup;

  constructor(formBuilder: FormBuilder, private articleService: ArticleService, private router: Router) {
    this.createArticleForm = formBuilder.group({
      'title' : [null, Validators.required]
    });
  }

  createArticle(title: HTMLInputElement, body: HTMLInputElement, category: HTMLInputElement, image: HTMLInputElement) {
    this.articleService.createArticle(title, body, category, image)
      .subscribe((response: Response) => {
          this.data = response.json();

          this.router.navigate(['/articles']);
        },
        (error) => this.error = error.json().error
      );
  }
}
