import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }   from './shared/authentication/login.component';
import { LogoutComponent }   from './shared/authentication/logout.component';
import { RegistrationComponent } from './shared/authentication/registration.component';
import { ProfileComponent} from './components/profile/profile.component';
import { EditProfileComponent } from './components/profile/edit-profile.component';

import { ArticlesComponent } from './components/article/articles.component';
import { ArticleDetailComponent } from './components/article/article-detail.component';

const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'logout',  component: LogoutComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile',  component: ProfileComponent },
  { path: 'edit-profile',  component: EditProfileComponent },

  { path: 'articles', component: ArticlesComponent},
  { path: 'articles/:id', component: ArticleDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
