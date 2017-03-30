import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit.component.html',
  styleUrls: ['../../app.component.css']
})

export class EditArticleComponent implements OnInit {
  data: Object;
  error: null;
  editArticleForm: FormGroup;

  constructor(formBuilder: FormBuilder, private articleService: ArticleService, private  activatedRoute: ActivatedRoute, private router: Router) {
    this.editArticleForm = formBuilder.group({
      'title' : [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.getArticleData(params['id']);
      });
  }

  getArticleData(id) {
    this.articleService.getArticleById(id)
      .subscribe((response: Response) => {
        this.data = response.json();
    });
  }

  editArticle(articleId, title: HTMLInputElement, body: HTMLInputElement, category: HTMLInputElement, image: HTMLInputElement) {
    this.error = null;
    this.articleService.editArticle(articleId, title, body, category, image)
      .subscribe((response: Response) => {
          this.data = response.json();

          this.router.navigate(['/articles']);
        },
        (error) => this.error = error.json().error
      );
  }
}
