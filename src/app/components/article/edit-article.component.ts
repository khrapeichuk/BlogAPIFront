import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ArticleService } from '../../article/article.service';

import {  } from '@angular/router';

@Component({
  selector: 'edit-article',
  templateUrl: 'edit-article.component.html',
  styleUrls: ['../../app.component.css']
})

export class EditArticleComponent implements OnInit {
  data: Object;
  error: null;

  constructor(private articleService: ArticleService, private  activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      let articleId = params['id'];
      this.getArticleData(articleId);
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
      .subscribe(
        (response: Response) => {
          this.data = response.json();

          this.router.navigate(['/articles']);
        },
        (error) => this.error = error.json().error
      );
  }
}
