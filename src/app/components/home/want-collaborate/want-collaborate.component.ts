import { Component, OnInit } from '@angular/core';
import {FormBuilder, UntypedFormBuilder, Validators} from '@angular/forms';
import {ApplicantService} from '../../../core/services/applicant.service';

@Component({
  selector: 'app-want-collaborate',
  templateUrl: './want-collaborate.component.html',
  styleUrls: ['./want-collaborate.component.scss']
})
export class WantCollaborateComponent implements OnInit {
  index = 0;
  donationType = null;
  showDonationTypes = false;
  showDonationDetails = false;

  applicantForm;
  sendingData = false;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  confCheck = false;
  contributionPayload;
  canSendForm = false;

  constructor(private _formBuilder: FormBuilder,
              private applicantService: ApplicantService
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

  onTabChanged(evento): void{
    console.log('changes');
    this.index = evento.index;
  }
  emitUniqueContribution(event){
    console.log('emitUniqueContribution', event);
    this.contributionPayload = event.uniqueDonation;
    event.uniqueDonation ? (this.canSendForm = true) : ( this.canSendForm = false)
  }

  sentData(): void{
    this.sendingData = true;
    const {country, city, address, ...user} = this.applicantForm;
    const contributor = {country, city, address, user};
    this.contributionPayload.contributor = contributor;
    console.log('response', this.contributionPayload);
    this.applicantService.createUniqueApplicant(this.contributionPayload)
      .subscribe((response) => {
        console.log('response', response);
        this.sendingData = false;
      }, ( error ) => {
        console.log('error', error);
        this.sendingData = false;
      });
  }
}
