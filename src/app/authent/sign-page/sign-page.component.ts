import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-page',
  templateUrl: './sign-page.component.html',
  styleUrls: ['./sign-page.component.css']
})
export class SignPageComponent implements OnInit {
  signUp = {};
  signUp_form: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signUp_form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [Validators.required]
    }
    , {
        validator: MustMatch('password', 'confirmPassword')
      }
      )
  
      
  }
  get f() {
    console.log(this.signUp_form.controls);
    return this.signUp_form.controls;
   
    
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
    // stop here if form is invalid
    if (this.signUp_form.invalid) {
      console.log(this.signUp_form.invalid);
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signUp_form.value))
    console.log(this.signUp_form.value);
  }
}


