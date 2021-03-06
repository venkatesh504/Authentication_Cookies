import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentRoutingModule } from './authent-routing.module';
import { AuthentComponent } from './authent.component';
import { CookieService } from 'ngx-cookie-service';

import { LoginPageComponent } from './login-page/login-page.component';
import { SignPageComponent } from './sign-page/sign-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ AuthentComponent, LoginPageComponent, SignPageComponent],
  imports: [
    CommonModule,
    AuthentRoutingModule,
    ReactiveFormsModule ,
      ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})


  ],
  providers: [ CookieService ],
})
export class AuthentModule { }
