import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  constructor(private http: HttpClient) { }

  sendEmail(payload): Observable<any> {
    return this.http.post<any>(environment.backend + '/emailSender/sendReminders/', payload);
  }
}
