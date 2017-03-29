import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './shared/authentication/login.component';
import { LogoutComponent }   from './shared/authentication/logout.component';
import { RegistrationComponent } from './shared/authentication/registration.component';
import { ProfileComponent } from './components/profile/index.component';
import { EditProfileComponent } from './components/profile/edit.component';

import { ArticlesComponent } from './components/article/index.component';
import { ArticleDetailComponent } from './components/article/detail.component';
import { CreateArticleComponent } from './components/article/create.component';
import { EditArticleComponent } from './components/article/edit.component';

import { CommentComponent } from './components/comment/index.component';
import { EditCommentComponent } from './components/comment/edit.component';

import { UsersComponent } from './components/admin/users.component';
import { EditUserComponent } from './components/admin/edit-user.component';

import { APIService } from './services/api.service';
import { UserService } from './services/user.service';
import { ArticleService } from './services/article.service';
import { LocalStorageService } from './services/local-storage.service';
import { CommentService } from './services/comment.service';

import { AuthenticationGuard } from './guards/authentication.guard';
import { AdminGuard } from './guards/admin.guard';

import { RelativeTimePipe } from './pipes/relative-time.pipe';

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

export class AppModule {}
