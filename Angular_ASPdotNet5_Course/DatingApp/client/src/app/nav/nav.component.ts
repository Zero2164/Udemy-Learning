import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isCollapsed = true;
  model : any = {};
  _textValue: string | undefined;
  faUser = faUser;
  logBtnClicked = false;
  registerDisp = "display: none;";
  loginDisp = "display: block;";
  shdw = "";



  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  ConvertToLower(evt: any) {
    this._textValue = evt.toLowerCase();
  }
  
  logout() {
    this.accountService.logout();
    this.toastr.warning("You are now logged out.");
    this.router.navigateByUrl('/');
  }

  navAway() {
    this.isCollapsed = true;
    this.shdw = "";
  }

  navClick() {
    this.isCollapsed = !this.isCollapsed
    if(!this.isCollapsed) {
      this.shdw = "bottomBox";
    } else if (this.isCollapsed) {
      this.shdw = "";
    }
  }

}
