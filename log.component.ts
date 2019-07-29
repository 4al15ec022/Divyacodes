import { Component, OnInit } from '@angular/core';
import { mobiscroll, MbscFormOptions } from '@mobiscroll/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  constructor(private fb: FormBuilder) { 
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  loginForm: FormGroup;

  isLogin = false;
  attemptedSubmit = false;

  formSettings: MbscFormOptions = {
    theme: 'ios'
  };

  errorMessages = {
    required: '{$1} required',
    minlength: 'At least 6 characters required',
    email: 'Invalid email address'
  };

  markFieldsDirty() {
    const controls = this.loginForm.controls;
    for (const field in controls) {
      if (controls[field]) {
        controls[field].markAsDirty();
      }
    }
  }

  signUp() {
    this.attemptedSubmit = true;
    if (this.loginForm.valid) {
      mobiscroll.toast({
        message: 'Signed Up!',
        callback: () => {
          this.loginForm.reset();
          this.attemptedSubmit = false;
        }
      });
    } else {
      this.markFieldsDirty();
    }
  }

  logIn() {
    this.attemptedSubmit = true;
    if (this.loginForm.valid) {
      mobiscroll.toast({
        message: 'Logged In!',
        callback: () => {
          this.loginForm.reset();
          this.attemptedSubmit = false;
        }
      });
    } else {
      this.markFieldsDirty();
    }
  }

  errorFor(fieldName: string) {
    const field = this.loginForm.controls[fieldName];
    for (const validator in field.errors) {
      if (field.errors[validator]) {
        const friendlyName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
        return this.errorMessages[validator].replace('{$1}', friendlyName);
      }
    }
    return null;
  }
  }

//   ngOnInit() {
//   }

// }
