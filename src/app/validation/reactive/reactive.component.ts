import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  myform: FormGroup;
  firstName: FormControl; 
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  //myform: FormGroup;
  //email = new FormControl("", [Validators.email, Validators.required,Validators.pattern("[^ @]*@[^ @]*"), this.validateemail])

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() { 
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
       Validators.required,
       Validators.pattern("[^ @]*@[^ @]*"),
      this.validateemail
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('', Validators.required);
  }

  createForm() { 
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }

  save(dta) { 

    console.log(this.email.value)
  }

  validateemail(abc: AbstractControl) {
    

    if (abc.value.startsWith("www")) {
      return null
    }
    else {
      return { validUrl: true }
    }
  }

}
