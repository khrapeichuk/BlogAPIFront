import { Injectable } from '@angular/core';

import {User} from "./user/user.model";

@Injectable()
export class LocalStorageService {

  getParameter (param){
    let user: User;
    user = JSON.parse(localStorage.getItem('currentUser'));
    switch (param){
      case 'id':
        return user._id;
      case 'email':
        return user.email;
      case 'token':
        return user.token;
    }
  }
}
