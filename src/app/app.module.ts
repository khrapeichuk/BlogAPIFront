import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
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

import { UsersComponent } from './components/admin/users.component';
import { EditUserComponent } from './components/admin/edit-user.component';

import { APIService } from "./api/api.service";
import { UserService } from '././user/user.service';
import { ArticleService } from '././article/article.service';
import { LocalStorageService } from './local-storage.service';
import { CommentService } from './comment/comment.service';

import { AuthenticationGuard } from './guards/authenticationGuard';
import { AdminGuard } from './guards/adminGuard';

import { RelativeTimePipe } from './pipes/relative_time.pipe';

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

    UsersComponent,
    EditUserComponent,

    RelativeTimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    APIService,
    UserService,
    ArticleService,
    LocalStorageService,
    CommentService,

    AuthenticationGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
