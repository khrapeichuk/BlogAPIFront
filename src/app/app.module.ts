import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './shared/authentication/login.component';
import { LogoutComponent }   from './shared/authentication/logout.component';
import { RegistrationComponent } from './shared/authentication/registration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/profile/edit-profile.component';

import { ArticlesComponent } from './components/article/articles.component';
import { ArticleDetailComponent } from './components/article/article-detail.component';
import { CreateArticleComponent } from './components/article/create-article.component';
import { EditArticleComponent } from './components/article/edit-article.component';

import { CommentComponent } from './components/comment/comment.component';
import { EditCommentComponent } from './components/comment/edit-comment.component';

import { APIService } from "./shared/api/api.service";
import { UserService } from '././user/user.service';
import { ArticleService } from '././article/article.service';
import { LocalStorageService } from './local-storage.service';
import { CommentService } from './comment/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    ProfileComponent,
    EditProfileComponent,

    ArticlesComponent,
    ArticleDetailComponent,
    CreateArticleComponent,
    EditArticleComponent,

    CommentComponent,
    EditCommentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    APIService,
    UserService,
    ArticleService,
    LocalStorageService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
