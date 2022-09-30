import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Volunter} from '../models/volunter.model';
import {environment} from '../../environments/environment';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VolunterService {

  constructor(private http: HttpClient) { }
  formData: any;
  // tslint:disable-next-line:variable-name
  private _listeners = new Subject<any>();

  listvolunters(): Observable<Volunter[]> {
    return this.http.get<Volunter[]>(environment.backend + '/volunters');
  }
  getvolunter(volunterId: any): Observable<Volunter> {
    return this.http.get<Volunter>(environment.backend + '/volunters/' + volunterId);
  }

  addvolunter(volunter: Volunter): Observable<any> {
    return this.http.post<any>(environment.backend + '/volunters/', volunter);
  }
  updatevolunter(volunter: Volunter): Observable<any> {
    return this.http.put<any>(environment.backend + '/volunters/' + volunter.volunter_id, volunter);
  }

  exitvolunter(volunterId: any): Observable<any>{
    console.log(environment.backend + '/exit/' + volunterId);
    return this.http.put<any>(environment.backend + '/volunters/exit/', volunterId);
  }
  listexitvolunter(): Observable<Volunter[]> {
    return this.http.get<Volunter[]>(environment.backend + '/volunters/exitvolunters');
  }
  listen(): Observable<any> {
    return this._listeners.asObservable();
  }

  // tslint:disable-next-line:typedef
  filter(filterBy: string) {
    this._listeners.next(filterBy);
  }
}
