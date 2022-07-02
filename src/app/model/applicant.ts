import { AbstractControl, FormGroup } from "@angular/forms"

export interface Applicant {
  name: string
  about_me: string
  email: string
  password?: string
  creation_date: string
  modification_date: string
}

export interface ApplicantLogIn extends FormGroup {
  value: Required<Pick<Applicant, "email" | "password">>
  controls: {
    email: AbstractControl
    password: AbstractControl
  }
}

export interface ApplicantRegister extends FormGroup {
  value: Required<Pick<Applicant, "email" | "password" | "name" >>
  controls: {
    email: AbstractControl
    password: AbstractControl
    name: AbstractControl
  }
}
