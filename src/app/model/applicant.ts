export interface Applicant {
  name: string
  about_me: string
  email: string
  password?: string
  creation_date: string
  modification_date: string
}

export type ApplicantLogIn = Required<Pick<Applicant, "email" | "password">>

export type ApplicantRegister = Required<Pick<Applicant, "email" | "password" | "name" >>
