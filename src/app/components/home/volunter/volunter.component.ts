import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService } from 'src/app/core/services/auth/oauth.service';
import { TokenService } from 'src/app/core/services/auth/token.service';
import {MatDialog} from '@angular/material/dialog';
import {LogInComponent} from '../../admin/log-in/log-in.component';

@Component({
  selector: 'app-volunter',
  templateUrl: './volunter.component.html',
  styleUrls: ['./volunter.component.scss']
})
export class VolunterComponent implements OnInit {

  loggedIn = false;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private tokenService: TokenService,
    private oauthService: OauthService,
  ) { }

  ngOnInit(): void {
  }
  signInWithGoogle(): void {
    const dialogConfig =  this.dialog.open(LogInComponent, {
      disableClose: false,
      panelClass: 'icon-outside',
      autoFocus: true,
      width: '500px',
    });
    dialogConfig.afterClosed().subscribe(result => {
    });
    /*this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
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
     );*/
  }
  logOut(): void {

  }
}
