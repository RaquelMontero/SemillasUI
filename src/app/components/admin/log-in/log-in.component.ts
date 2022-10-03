import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  formLogin = this.formgroup.group({
    user: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formgroup: FormBuilder) { }

  ngOnInit(): void {
  }

}
