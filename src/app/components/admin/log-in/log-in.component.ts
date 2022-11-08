import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {OauthService} from '../../../services/auth/oauth.service';

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
              private oauthservice: OauthService) { }

  ngOnInit(): void {
  }

  login(): void{
    const payload = this.formLogin.value;
    this.oauthservice.loginVolunter(payload)
      .subscribe((data) => {
        console.log(data);
        this.oauthservice.login(data.token);
        this.oauthservice.getCurrentUser().subscribe((usr)=>{
          console.log('curr', usr);
        });
      });
  }

  get getUsernameError(){
    if (this.formLogin.get('username').hasError('required')){
      return 'El nombre de usuario es requerido';
    }
  }
}
