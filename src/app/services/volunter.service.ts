import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Volunter, VolunterFilter} from '../models/volunter.model';
import {environment} from '../../environments/environment';
import {Observable, Subject} from 'rxjs';
import {Table} from '../models/Table.model.';

@Injectable({
  providedIn: 'root'
})
export class VolunterService {

  constructor(private http: HttpClient) { }
  formData: any;
  // tslint:disable-next-line:variable-name
  private _listeners = new Subject<any>();

  listvolunters(): Observable<Table> {
    return this.http.get<Table>(environment.backend + '/seeds/volunters/all/');
  }

  listTrackingvolunters(): Observable<Table> {
    //return this.http.get<Table>('./assets/statics/trackingvolunters.json');
    return this.http.get<Table>(environment.backend + '/seeds/volunters/trackingVolunters/');
  }
  getvolunter(volunterId: any): Observable<Volunter> {
    const p = new HttpParams().set('id', volunterId);
    return this.http.get<Volunter>(environment.backend +
      '/seeds/volunters/getVolunter', { params: p});
  }

  addvolunter(volunter: Volunter): Observable<any> {
    return this.http.post<any>(environment.backend + '/seeds/volunters/create/', volunter);
  }

  updatevolunter(volunter: Volunter): Observable<any> {
    return this.http.put<any>(environment.backend + '/seeds/volunters/updateVolunter',  volunter);
  }

  exitvolunter(id: any): Observable<any>{
    return this.http.post<any>(environment.backend + '/seeds/volunters/exitVolunter', {
      id
    });
  }
  deleteVolunter(id: any): Observable<any>{
    return this.http.post<any>(environment.backend + '/seeds/volunters/deleteVolunter', {
      id
    });
  }

  listexitvolunter(filter: VolunterFilter): Observable<Volunter[]> {
    const p = new HttpParams()
      .set('status', filter.status)
      .set('roleId', filter.roleId);

    return this.http.get<Volunter[]>(environment.backend + '/seeds/volunters/exitvolunters');
  }
  listen(): Observable<any> {
    return this._listeners.asObservable();
  }

  // tslint:disable-next-line:typedef
  filter(filterBy: string) {
    this._listeners.next(filterBy);
  }
}
