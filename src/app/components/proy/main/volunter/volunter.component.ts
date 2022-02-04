import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-volunter',
  templateUrl: './volunter.component.html',
  styleUrls: ['./volunter.component.scss']
})
export class VolunterComponent implements OnInit {

  userLogged: SocialUser;
  loggedIn: boolean = false;

  constructor(
    //private authService: SocialAuthService,
    private router: Router,
    //private tokenService: TokenService,
    //private oauthService: OauthService,
  ) { }

  ngOnInit(): void {
    /* this.authService.authState.subscribe((data) => {
       this.userLogged = data;
       this.loggedIn = (this.userLogged != null && this.tokenService.getToken() != null);
     });*/
  }
  signInWithGoogle(): void {
    /* this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
       data => {
         this.userLogged = data;
         console.log(data)
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
     );*/
  }

}
