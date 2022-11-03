import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  formLogin = this.formgroup.group({
    user: [null, Validators.required],
    password: [null, Validators.required]
  });
  hide = true;
  constructor(private formgroup: FormBuilder) { }

  ngOnInit(): void {
  }

  login(): void{

  }
}
