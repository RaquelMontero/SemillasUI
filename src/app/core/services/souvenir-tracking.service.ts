import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Table} from '../models/Table.model.';
import {environment} from '../../../environments/environment';
import {Volunter} from '../models/volunter.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SouvenirTrackingService {

  constructor(private http: HttpClient) { }
  formData: any;

  listBenefitedSeeds(any: any){
    const p = new HttpParams().set('status', any);
    return this.http.get<Table>(environment.backend + '/seeds/souvenir/getAllBenefitedSeeds/',
      { params: p });
  }

  addBenefitedSeed(payload): Observable<any> {
    return this.http.post<any>(environment.backend + '/seeds/souvenir/createBenefitedSeed/', payload);
  }
}
