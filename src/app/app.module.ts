import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EditProfileComponent } from './components/profile/edit.component';
import { LoginComponent } from './components/authentication/login.component';
import { LogoutComponent } from './components/authentication/logout.component';
import { RegistrationComponent } from './components/authentication/registration.component';
import { ProfileComponent } from './components/profile/index.component';

import { ArticlesComponent } from './components/article/index.component';
import { ArticleDetailComponent } from './components/article/detail.component';
import { CreateArticleComponent } from './components/article/create.component';
import { EditArticleComponent } from './components/article/edit.component';

import { CommentComponent } from './components/comment/index.component';
import { EditCommentComponent } from './components/comment/edit.component';

import { EditUserComponent } from './components/admin/edit-user.component';
import { UserProfileComponent } from './components/admin/user-profile.component';
import { UsersComponent } from './components/admin/users.component';

import { APIService } from './services/api.service';
import { ArticleService } from './services/article.service';
import { CommentService } from './services/comment.service';
import { LocalStorageService } from './services/local-storage.service';
import { UserService } from './services/user.service';

import { AdminGuard } from './guards/admin.guard';
import { AuthenticationGuard } from './guards/authentication.guard';

import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { YearsAndMonthsPipe } from './pipes/years-and-months.pipe';

import { ImageStyleDirective } from './directives/image-style.directive';
import { ImageDimensionsDirectives } from './directives/image-dimensions.directives';

@NgModule({
  declarations: [
    AppComponent,
    EditProfileComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    ProfileComponent,

    ArticlesComponent,
    ArticleDetailComponent,
    CreateArticleComponent,
    EditArticleComponent,

    CommentComponent,
    EditCommentComponent,

    EditUserComponent,
    UserProfileComponent,
    UsersComponent,

    RelativeTimePipe,
    YearsAndMonthsPipe,

    ImageStyleDirective,
    ImageDimensionsDirectives,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    APIService,
    ArticleService,
    CommentService,
    LocalStorageService,
    UserService,

    AdminGuard,
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
