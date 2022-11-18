import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {OauthService} from '../../../services/auth/oauth.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  formLogin = this.formgroup.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });
  hide = true;
  constructor(private formgroup: FormBuilder,
              private oauthservice: OauthService,
              private router: Router,
              public dialogRef: MatDialogRef<LogInComponent>)
  { }

  ngOnInit(): void {
  }

  login(): void{
    const payload = this.formLogin.value;
    this.oauthservice.loginVolunter(payload)
      .subscribe((data) => {
        this.dialogRef.close();
        this.oauthservice.login(data.token);
        this.oauthservice.getCurrentUser().subscribe((usr)=>{
          this.oauthservice.setUser(usr);
          if (this.oauthservice.getUserRoles().length > 0){
            this.router.navigate(['/admin']).then(() => {
              window.location.reload();
            });
          }
        });
    }, ((error) => {
        this.oauthservice.logout();
        console.log('error', error);
      }));
  }

  get getUsernameError(): string{
    if (this.formLogin.get('username').hasError('required')){
      return 'El nombre de usuario es requerido';
    }
  }
}
