import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  _textValue: string | undefined;
  model : any = {};
  switchFrm = false;
  loginMode = false;
  faTimes = faTimes;
  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  ConvertToLower(evt: any) {
    this._textValue = evt.toLowerCase();
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members');
      this.toastr.success("Login Success. Welcome Back!");
    }, error => {
      this.toastr.error(error.error);
      console.log(error);
    })
  }

  registrClicked() {
    this.switchFrm = !this.switchFrm;
  }

  cancelLoginMode(event: boolean) {
    this.loginMode = event;
  }

}
