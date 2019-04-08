import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentComponent } from './authent.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignPageComponent } from './sign-page/sign-page.component';


const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'home_page',component:AuthentComponent},
  {path:'signUp_page',component:SignPageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentRoutingModule { }
