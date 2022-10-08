import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Volunter} from '../models/volunter.model';
import {environment} from '../../environments/environment';
import {Observable, Subject} from 'rxjs';
import {Table} from '../models/DTO/Table.model.';

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
    return this.http.get<Table>(environment.backend + '/seeds/volunters/trackingVolunters/');
  }
  getvolunter(volunterId: any): Observable<Volunter> {
    return this.http.get<Volunter>(environment.backend + '/seeds/volunters/' + volunterId);
  }

  addvolunter(volunter: Volunter): Observable<any> {
    return this.http.post<any>(environment.backend + '/seeds/volunters/create/', volunter);
  }
  updatevolunter(volunter: Volunter): Observable<any> {
    return this.http.put<any>(environment.backend + '/seeds/volunters/' + volunter.volunter_id, volunter);
  }

  exitvolunter(id: any): Observable<any>{
    console.log(environment.backend + '/exit/' + id);
    return this.http.post<any>(environment.backend + '/seeds/volunters/exit/', {
      id
    });
  }
  listexitvolunter(): Observable<Volunter[]> {
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
