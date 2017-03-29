import { Injectable } from '@angular/core';

import {User} from "./models/user.model";

@Injectable()
export class LocalStorageService {

  setObject (name, object) {
    localStorage.setItem(name, JSON.stringify(object));
  }

  getObject (name) : User {
    return JSON.parse(localStorage.getItem(name));
  }

  getParameter (param): any {
    let user: User;
    user = this.getObject('currentUser');
    switch (param){
      case 'id':
        return user._id;
      case 'email':
        return user.email;
      case 'token':
        return user.token;
      case 'rights':
        return user.rights;
    }
  }
}
