import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Applicant} from '../models/applicant.model';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../environments/environment';
import {ComboElement, ComboResponse} from '../models/DTO/Utils.model';
import {PostMessage} from '../models/DTO/Message.model';
import {Table} from '../models/DTO/Table.model.';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {


  constructor(private http: HttpClient) { }
  formData: any;
  // tslint:disable-next-line:variable-name
  private _listeners = new Subject<any>();
  createUniqueApplicant(applicant: Applicant): Observable<PostMessage> {
    return this.http.post<PostMessage>(environment.backend + '/seeds/applicants/unique', applicant
    );
  }

  addconstantapplicant(applicant: Applicant): Observable<any>  {
    return this.http.post<any>(environment.backend + '/seeds/applicants/constant', applicant);
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

  listPendingSeeds(): Observable<Table> {
    return this.http.get<Table>(environment.backend + '/seeds/applicants/pending');
  }
  listRejectedSeeds(): Observable<Table> {
    return this.http.get<Table>(environment.backend + '/seeds/applicants/rejected');
  }

  listOficialSeeds(): Observable<Table> {
    return this.http.get<Table>(environment.backend + '/seeds/applicants/acepted');
  }
  listen(): Observable<any> {
    return this._listeners.asObservable();
  }

  // tslint:disable-next-line:typedef
  filter(filterBy: string) {
    this._listeners.next(filterBy);
  }
}
