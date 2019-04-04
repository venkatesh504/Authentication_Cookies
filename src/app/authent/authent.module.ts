import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentRoutingModule } from './authent-routing.module';
import { AuthentComponent } from './authent.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { SignPageComponent } from './sign-page/sign-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ AuthentComponent, LoginPageComponent, SignPageComponent],
  imports: [
    CommonModule,
    AuthentRoutingModule,
    ReactiveFormsModule 

  ]
})
export class AuthentModule { }
