import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Blog API';

  ngOnInit(): void {
    this.isAuthorized();
  }

  isAuthorized() {
    if (localStorage.getItem('id') && localStorage.getItem('token')) {
      return true;
    }
    else {
      return false;
    }
  }
}
