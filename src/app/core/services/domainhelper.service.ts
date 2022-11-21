import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Table} from '../models/Table.model.';
import {environment} from '../../../environments/environment';
import {Role} from '../models/volunter.model';

@Injectable({
  providedIn: 'root'
})
export class DomainhelperService {

  constructor(private http: HttpClient) { }
  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(environment.backend + '/seeds/volunters/roles');
  }
}
