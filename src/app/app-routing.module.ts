import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './shared/authentication/login.component';
import { LogoutComponent } from './shared/authentication/logout.component';
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
import { UserProfileComponent } from './components/admin/user-profile.component';

import { AuthenticationGuard } from './guards/authentication.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'logout',  component: LogoutComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile',  component: ProfileComponent, canActivate: [AuthenticationGuard] },
  { path: 'edit-profile',  component: EditProfileComponent, canActivate: [AuthenticationGuard] },

  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleDetailComponent, canActivate: [AuthenticationGuard] },
  { path: 'create-article', component: CreateArticleComponent, canActivate: [AuthenticationGuard] },
  { path: 'edit-article/:id', component: EditArticleComponent, canActivate: [AuthenticationGuard] },

  { path: 'articles/:articleId/comment/:commentId', component: CommentComponent, canActivate: [AuthenticationGuard] },
  { path: 'articles/:articleId/comment/:commentId/edit', component: EditCommentComponent, canActivate: [AuthenticationGuard] },

  { path: 'admin/users', component: UsersComponent, canActivate: [AdminGuard] },
  { path: 'admin/users/edit/:id', component: EditUserComponent, canActivate: [AdminGuard] },
  { path: 'admin/users/profile/:id', component: UserProfileComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
