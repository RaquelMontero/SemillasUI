import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Table} from '../models/DTO/Table.model.';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private http: HttpClient) { }

  listTrackingSeeds(idVolunter): Observable<Table> {
    const p = new HttpParams().set('id', idVolunter);
    return this.http.get<Table>(environment.backend + '/seeds/trackingassignment/trackingSeeds'
    , { params: p });
  }
}
