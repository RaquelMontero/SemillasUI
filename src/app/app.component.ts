import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import {OauthService} from './core/services/auth/oauth.service';

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
    private observer: BreakpointObserver) {}

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
