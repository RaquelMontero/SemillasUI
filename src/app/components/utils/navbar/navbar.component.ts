import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { OauthService } from 'src/app/services/auth/oauth.service';
import { TokenService } from 'src/app/services/auth/token.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sml-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() inputSideNav: MatSidenav;
  showFiller = false;
  events: string[] = [];
  opened: boolean;
  panelOpenState = false;
  snav: MatSidenav;

  loggedIn: boolean = false;

  currentUser;
  loadingUser = true;
  constructor(
    private router: Router,
    private tokenService: TokenService,
    private oauthService: OauthService,
  ) { }


  display = false;
  // tslint:disable-next-line:typedef
  onPress() {
    this.display = !this.display;
  }
/*
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        this.userLogged = data;
        const tokenGoogle = new TokenDto(this.userLogged.idToken);
        this.oauthService.google(tokenGoogle).subscribe(
          res => {
            this.tokenService.setToken(res.value);
            this.loggedIn = true;
            this.router.navigate(['/volunters']);
          },
          err => {
            console.log(err);
            this.logOut();
          }
        );
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
  }
*/

  /*autoLogin(){
    const tokenGoogle = new TokenDto(this.tokenService.getToken());
    console.log('seloguea ' + this.loggedIn + tokenGoogle.value);
    this.oauthService.google(tokenGoogle).subscribe(
      res => {
        // this.tokenService.setToken(res.value);
        this.loggedIn = true;
        console.log('seloguea ' + this.loggedIn);
        //this.router.navigate(['/admin/ver-voluntarios']);
      },
      err => {
        console.log(err);
        this.logOut();
      }
    );
  }*/
  logOut(): void {
    this.oauthService.logout();
    window.location.reload();
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void{
    this.oauthService.getCurrentUser().subscribe((usr)=>{
      this.oauthService.setUser(usr);
      this.currentUser = usr;
      this.loadingUser = false;
      this.loggedIn = true;
    }, (error => {
      this.inputSideNav.close();
      this.currentUser = null;
      this.loadingUser = false;
      this.loggedIn = false;
    }));
  }
  refreshToken(): void {
  }
}
