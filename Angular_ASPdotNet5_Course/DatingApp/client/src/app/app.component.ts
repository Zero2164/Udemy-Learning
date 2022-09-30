import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Coffee Date';
  users: any;
  faUser = faUser;
  isPopState = false;

  constructor(private accountService: AccountService, private router: Router, private locStrat: LocationStrategy) { }
  ngOnInit() {
    this.setCurrentUser();

    this.locStrat.onPopState(() => {
      this.isPopState = true;
    });
    
    this.router.events.subscribe(event => {
      // Scroll to top if accessing a page, not via browser history stack
      if (event instanceof NavigationEnd && !this.isPopState) {
      window.scrollTo(0, 0);
      this.isPopState = false;
      }
      
      // Ensures that isPopState is reset
      if (event instanceof NavigationEnd) {
      this.isPopState = false;
      }
    });
    
  }

  setCurrentUser() {
    const userJson = localStorage.getItem('user');
    const user = userJson !== null ? JSON.parse(userJson) : null;
    this.accountService.setCurrentUser(user);
  }


}
