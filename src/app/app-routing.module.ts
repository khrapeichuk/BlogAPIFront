import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }   from './shared/authentication/login.component';
import { LogoutComponent }   from './shared/authentication/logout.component';
import { RegistrationComponent } from './shared/authentication/registration.component';
import { ProfileComponent} from './components/profile/profile.component';
import { EditProfileComponent } from './components/profile/edit-profile.component';

import { ArticlesComponent } from './components/article/articles.component';
import { ArticleDetailComponent } from './components/article/article-detail.component';
import { CreateArticleComponent } from './components/article/create-article.component';
import { EditArticleComponent } from './components/article/edit-article.component';

import { CommentComponent } from './components/comment/comment.component';
import { EditCommentComponent } from './components/comment/edit-comment.component';

const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'logout',  component: LogoutComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile',  component: ProfileComponent },
  { path: 'edit-profile',  component: EditProfileComponent },

  { path: 'articles', component: ArticlesComponent},
  { path: 'articles/:id', component: ArticleDetailComponent },
  { path: 'create-article', component: CreateArticleComponent },
  { path: 'edit-article/:id', component: EditArticleComponent },

  { path: 'articles/:articleId/comment/:commentId', component: CommentComponent },
  { path: 'articles/:articleId/comment/:commentId/edit', component: EditCommentComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
