import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Table} from '../models/Table.model.';
import {environment} from '../../environments/environment';
import {BoxSeed, Seed} from '../models/Seed.model';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private http: HttpClient) { }

  listTrackingSeeds(idVolunter): Observable<Table> {
    const p = new HttpParams().set('id', idVolunter);
    //return this.http.get<Table>(/*environment.backend + */'./assets/statics/trackingseeds.json');
    return this.http.get<Table>(environment.backend + '/seeds/trackingassignment/trackingSeeds', { params: p });
  }
  getActiveSeeds(): Observable<BoxSeed[]>{
    //return this.http.get<BoxSeed[]>(/*environment.backend + */'./assets/statics/activeseeds.json');
    return this.http.get<BoxSeed[]>(environment.backend + '/seeds/applicants/activeseeds');
  }

  saveTrackingAssign(payload): Observable<any> {
    return this.http.post<any>(environment.backend + '/seeds/trackingassignment/createAssinment', payload);
  }

  listSeedTrackingRecords(idSeed): Observable<Table> {
    const p = new HttpParams().set('id', idSeed);
    return this.http.get<Table>(/*environment.backend + */'./assets/statics/donations.json');
    //return this.http.get<Table>(environment.backend + '/seeds/trackingassignment/trackingSeeds', { params: p });
  }

  getIncomeContributions(beginDate?): Observable<Table> {
    const p = new HttpParams().set('id', beginDate);
    return this.http.get<Table>(environment.backend +
      '/seeds/trackingassignment/trackingSeeds'
      , { params: p });
  }

  getSeedsDonations(idSeed): Observable<Table> {
      const p = new HttpParams().set('id', idSeed);
      return this.http.get<Table>(environment.backend +
        '/seeds/tracking/trackingSeeds'
        , { params: p });
  }
}
