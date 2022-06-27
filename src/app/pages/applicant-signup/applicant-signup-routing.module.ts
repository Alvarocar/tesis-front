import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantSignupComponent } from './applicant-signup.component';

const routes: Routes = [{ path: '', component: ApplicantSignupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantSignupRoutingModule { }
