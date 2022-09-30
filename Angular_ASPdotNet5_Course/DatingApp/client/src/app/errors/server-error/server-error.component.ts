import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {
  error: any;
  errClick = false;
  pageV = "pageView";

  constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.error;
    
  }

  ngOnInit(): void {
  }

  errClicked() {
    this.errClick =  !this.errClick;
    if(this.errClick) {
      this.pageV = "";
    } else {
      this.pageV = "pageView";
    }
  }
}
