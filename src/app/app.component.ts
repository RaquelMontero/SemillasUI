import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import {OauthService} from './core/services/auth/oauth.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'sml-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  title = 'semillasui';
  logged = false;
  events: string[] = [];
  constructor(
    private oauthService: OauthService,
    private  translateService: TranslateService,
    private observer: BreakpointObserver) {
    translateService.addLangs(['en','es']);
    translateService.setDefaultLang('es');
  }

  switchLang(lang: string){
    this.translateService.use(lang);
  }
  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  ngOnInit(): void {
    this.logged = this.isLogged;
  }
  get isLogged(): boolean{
    return this.oauthService.isLoggedIn();
  }
}
