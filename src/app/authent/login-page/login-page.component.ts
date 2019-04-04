import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  angForm: FormGroup;
  Login:any ={};
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }
  createForm(){
    this.angForm = this.fb.group({
      name: ['', Validators.required ]

    })
  }
  ngOnInit() {
  }

}
