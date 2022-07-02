import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApplicantRegister } from 'src/app/model/applicant'
import { ApplicantService } from 'src/app/services/applicant.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {

  myForm: ApplicantRegister

  constructor (
    private formb: FormBuilder,
    private applicantService: ApplicantService,
    ) {}

  ngOnInit(): void {
    this.myForm = this.formb.group({
      name: ['', Validators.required],
      email: ['',
       Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    }) as ApplicantRegister
  }

  onSubmit() {
    if(!this.myForm.valid) {
      return
   }
   this.applicantService.signUp(this.myForm.getRawValue())
   .subscribe()
  }
}
