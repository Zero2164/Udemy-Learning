import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  registerForm: FormGroup;
  nextActive = 0;


  constructor(private accountService: AccountService, private router: Router, private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialiseForm();
    
  }

  initialiseForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      gender: ['male'],
      knownAs: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]]
    })
    this.registerForm.controls.password.valueChanges.subscribe(() => {
      this.registerForm.controls.confirmPassword.updateValueAndValidity();
    })
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value 
        ? null : {isMatching: true};
    }
  }

  register() {
    console.log(this.registerForm.value);
    // this.accountService.register(this.model).subscribe(response => {
    //   this.router.navigateByUrl('/members');
    //   this.toastr.success("Sign Up Success. Welcome to ACOFFEE!");
    // }, error => {
    //   this.toastr.error(error.error);
    //   console.log(error);
    // });
  }

  conditionals() {
    if(this.registerForm.status.toString() === 'INVALID') return true;
  }


  activateNext() {
    this.nextActive += 1;
  }

  goBack() {
    this.nextActive -= 1;
  }

}
