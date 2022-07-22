import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './component/login';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  exports: [
    LoginPageComponent
  ]
})
export class AuthFeatureModule { }
