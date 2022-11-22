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
  }
  logOut(): void {

  }
}
