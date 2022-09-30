import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Applicant} from '../models/applicant.model';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {


  constructor(private http: HttpClient) { }
  formData: any;
  // tslint:disable-next-line:variable-name
  private _listeners = new Subject<any>();

  listApplicants(): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(environment.backend + '/seeds/applicants');
  }

  listen(): Observable<any> {
    return this._listeners.asObservable();
  }


  addapplicant(applicant: Applicant): Observable<any> {
    return this.http.post<any>(environment.backend + '/applicants/unique', applicant
    );
  }

  addconstantapplicant(applicant: Applicant): Observable<any>  {
    return this.http.post<any>(environment.backend + '/applicants/constant', applicant);
  }

  rejectapplicant(reason: any, applicantId: number): Observable<any> {
    return this.http.put<any>(environment.backend + '/applicants/reject/' + applicantId, reason);
  }

  listRejectedAplicants(): Observable<any> {
    return this.http.get<any[]>(environment.backend + '/applicants/rejected');
  }

  aceptapplicant(applicantId: number): Observable<any> {
    return this.http.put<any>(environment.backend + '/applicants/acept/' + applicantId, applicantId);
  }

  listaportadores(): Observable<any> {
    return this.http.get<any[]>(environment.backend + '/applicants/acepted');
  }

  getCountries(): Observable<any> {
   return this.http.get<any[]>('./assets/statics/countries.json');
  }

  getPaymentMethods(): Observable<any> {
    return this.http.get<any[]>('./assets/statics/payment_methods.json');
  }

  // tslint:disable-next-line:typedef
  filter(filterBy: string) {
    this._listeners.next(filterBy);
  }
}
