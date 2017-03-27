import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'Blog API';

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.isAuthorized();
    //this.isAdmin();
  }

  isAuthorized() {
    if (this.localStorageService.getObject('currentUser')) {
      return true;
    }
    else {
      return false;
    }
  }

  // isAdmin() {
  //   let rights = this.localStorageService.getParameter('rights');
  //
  //   if(this.localStorageService.getParameter('rights').contains("ADMIN")) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }
}
