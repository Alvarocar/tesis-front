import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantSignupRoutingModule } from './applicant-signup-routing.module';
import { ApplicantSignupComponent } from './applicant-signup.component';
import { MainTopbarComponent } from 'src/app/components/template/topbar/main-topbar/main-topbar.component';
import { MainFooterComponent } from 'src/app/components/template/footer/main-footer/main-footer.component';


@NgModule({
  declarations: [
    ApplicantSignupComponent
  ],
  imports: [
    CommonModule,
    ApplicantSignupRoutingModule,
    MainTopbarComponent,
    MainFooterComponent,
  ]
})
export class ApplicantSignupModule { }
