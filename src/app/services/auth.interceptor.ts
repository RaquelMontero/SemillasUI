import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {OauthService} from './auth/oauth.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements  HttpInterceptor{
  constructor(private loginServie: OauthService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.loginServie.getToken();
    if (token != null) {
      authReq = authReq.clone({
        setHeaders: {Authorization: `Bearer ${token}`}
      });
    }
    console.log('suarq', authReq);
    return next.handle(authReq);
  }
}
export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
]
