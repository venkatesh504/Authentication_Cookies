import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  Login:any ={};
  constructor(private formBuilder: FormBuilder,private router: Router) { 
  }
  get f() { return  this.angForm.controls; }
  ngOnInit() {
    this.angForm = this.formBuilder.group({
      log_email: ['',[Validators.email,Validators.required ] ],
      log_password :['',[Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit(){
    this.submitted = true;
    if (this.angForm .invalid) {
      return;
  }
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.angForm.value))
  this.router.navigate(['']);
  
  }
}
