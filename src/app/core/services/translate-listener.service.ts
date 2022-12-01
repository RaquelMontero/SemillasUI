import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateListenerService {
  private _language: BehaviorSubject<string>;

  constructor(private readonly NgxTranslateService: TranslateService) {
    this._language = new BehaviorSubject("es"); // Default language
    NgxTranslateService.use("es");
  }

  set language(value: string) {
    this._language.next(value);
    this.NgxTranslateService.use(value);
  }

  public getLanguage$(): Observable<string> {
    return this._language.asObservable();
  }

  public getCurrentLanguage(): string {
    return this._language.getValue();
  }
}
