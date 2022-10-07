import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-want-collaborate',
  templateUrl: './want-collaborate.component.html',
  styleUrls: ['./want-collaborate.component.scss']
})
export class WantCollaborateComponent implements OnInit {
  index = 0;
  donationType;
  showDonationTypes = false;
  showDonationDetails = false;

  applicantForm; /*= this.fb.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    dni: ['', Validators.required],
    birthdate: ['', Validators.required],

  });*/
  constructor(private fb: FormBuilder,
  ) { }
  ngOnInit(): void {
  }


  onSubmit(): void{
    console.log('asdas', this.applicantForm.value);
  }
  move_tab(event): void{
    console.log('event', event.tabAction);
    this.index = event.tabAction.number;
    this.donationType = event.tabAction.action;
  }

  getPersonalInfo(event){
    this.applicantForm = event;
  }
}
