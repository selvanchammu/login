import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-page/login/login.component';
import { SignupComponent } from './signup-page/signup/signup.component';

const routes: Routes = [{path:'login-page', component:LoginComponent},{path:'signup-page', component:SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
