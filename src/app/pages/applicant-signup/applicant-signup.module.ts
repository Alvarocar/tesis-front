import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ApplicantSignupRoutingModule } from './applicant-signup-routing.module';
import { ApplicantSignupComponent } from './applicant-signup.component';
import { MainTopbarComponent } from 'src/app/components/template/topbar/main-topbar/main-topbar.component';
import { MainFooterComponent } from 'src/app/components/template/footer/main-footer/main-footer.component';
import { SignupFormComponent } from './children/signup-form/signup-form.component';
import { MatFormFieldModule } from '@angular/material/form-field'

@NgModule({
  declarations: [
    ApplicantSignupComponent,
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    ApplicantSignupRoutingModule,
    MainTopbarComponent,
    MainFooterComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
  ]
})
export class ApplicantSignupModule { }
