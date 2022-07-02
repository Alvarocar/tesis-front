import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Applicant, ApplicantRegister } from '../model/applicant';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'any'
})
export class ApplicantService {

  private readonly api = `${environment.host}/v1/applicants`

  constructor(private http: HttpClient) { }

  signUp(applicant: ApplicantRegister['value']) {
    return this.http.post(`${this.api}/signup`, applicant)
  }
}
