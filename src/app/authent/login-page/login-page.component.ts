import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  Login_email:any;
  Login_password:any;
  angForm: FormGroup;
  sign_Email = 'UNKNOWN';
  sign_Password  = 'UNKNOW';
  submitted = false;
  Login:any ={};
  constructor(private formBuilder: FormBuilder,private router: Router,  private cookieService: CookieService) { 
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

  this.sign_Email = this.cookieService.get('signup_email');
    this. sign_Password = this.cookieService.get('signup_password');
    if(this.sign_Email == this. Login_email){
      if(this. sign_Password == this.Login_password){

        alert('SUCCESS!! :-)\n\n' + JSON.stringify("Successfully logged in"))
        this.router.navigate(['home_page']);
        

      }
    else{
      alert('SUCCESS!! :-)\n\n' + JSON.stringify("Incorrect password"))
    }
    }
    else{
      alert('SUCCESS!! :-)\n\n' + JSON.stringify("Incorrect username"))

    }
  }
}
