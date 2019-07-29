// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { MbscFormOptions } from '@mobiscroll/angular';


// @Component({
//   selector: 'app-sign',
//   templateUrl: './sign.component.html',
//   styleUrls: ['./sign.component.scss']
// })
// export class SignComponent implements OnInit {

//   constructor(private formBuilder: FormBuilder) { 
//     this.form = formBuilder.group({
//       username: ['', [Validators.required, Validators.minLength(4)]],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z]).{6,}')]]
//   });
//   }
//   form: FormGroup;
//   formSettings: MbscFormOptions = {
//       theme: 'ios'
//   };

//   errorMessages = {
//       username: {
//           required: 'Name required',
//           minlength: 'Please enter at least 4 characters.'
//       },
//       email: {
//           required: 'Email required',
//           email: 'Invalid email address'
//       },
//       password: {
//           required: 'Password required',
//           pattern: 'Invalid, please see rules'
//       }
//   };

//   triedToSubmit = false;

//   submit() {
//       this.triedToSubmit = true;
//       if (this.form.invalid) {
//           const controls = this.form.controls;
//           for (const control in controls) {
//               if (controls[control]) {
//                   controls[control].markAsDirty();
//                   controls[control].markAsTouched();
//               }
//           }
//       }
//   }

//   errorFor(field: string) {
//       const control = this.form.controls[field];
//       for (const validator in control.errors) {
//           if (control.errors[validator]) {
//               return this.errorMessages[field][validator];
//           }
//       }
//       return null;
//   }
// }
  // ngOnInit() {
  // }


