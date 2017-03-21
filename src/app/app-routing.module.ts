import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }   from './shared/authentication/login.component';
import { LogoutComponent }   from './shared/authentication/logout.component';
import { ProfileComponent} from './components/profile/profile.component';
import { EditProfileComponent } from './components/profile/edit-profile.component';

const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'logout',  component: LogoutComponent },
  { path: 'profile',  component: ProfileComponent },
  { path: 'edit-profile',  component: EditProfileComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
