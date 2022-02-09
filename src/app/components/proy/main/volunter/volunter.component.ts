import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { TokenDto } from 'src/app/models/token';
import { OauthService } from 'src/app/services/auth/oauth.service';
import { TokenService } from 'src/app/services/auth/token.service';

@Component({
  selector: 'app-volunter',
  templateUrl: './volunter.component.html',
  styleUrls: ['./volunter.component.scss']
})
export class VolunterComponent implements OnInit {

  userLogged: SocialUser;
  loggedIn = false;

  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private tokenService: TokenService,
    private oauthService: OauthService,
  ) { }

  ngOnInit(): void {
     this.authService.authState.subscribe((data) => {
       this.userLogged = data;
       this.loggedIn = (
         this.userLogged != null && this.tokenService.getToken() != null);
     });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
       data => {
         this.userLogged = data;
         console.log(data);
         const tokenGoogle = new TokenDto(this.userLogged.idToken);
         this.oauthService.google(tokenGoogle).subscribe(
           res => {
             this.tokenService.setToken(res.value);
             this.loggedIn = true;
             this.router.navigate(['/admin/ver-voluntarios']);
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
  logOut(): void {
    this.authService.signOut().then(
      data => {
        this.tokenService.logOut();
        this.router.navigate(['/soy-voluntaria']);
      }
    );
  }
}
