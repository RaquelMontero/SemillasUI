import { Component, OnInit } from '@angular/core';
import {FormBuilder, UntypedFormBuilder, Validators} from '@angular/forms';
import {ApplicantService} from '../../../core/services/applicant.service';
import {LogInComponent} from '../../admin/log-in/log-in.component';
import {MatDialog} from '@angular/material/dialog';
import {SentDataMessageComponent} from './sent-data-message/sent-data-message.component';
import {MessageSnackBarComponent} from '../../../shared/message-snack-bar/message-snack-bar.component';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  justSentForm = false;
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
              private dialog: MatDialog,
              private matSnackBar: MatSnackBar,
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
    this.index = evento.index;
  }
  emitUniqueContribution(event){
    this.contributionPayload = event.uniqueDonation;
    event.uniqueDonation && this.donationType==='UNIQUE' ? (this.canSendForm = true) : ( this.canSendForm = false)
  }

  emitConstantContribution(event){
    this.contributionPayload = event.constantContribution;
    event.constantContribution && this.donationType==='CONSTANT' ?  (this.canSendForm = true) : ( this.canSendForm = false)
  }

  sentData(): void{
    this.sendingData = true;
    const {country, city, address, ...user} = this.applicantForm;
    const contributor = {country, city, address, user};
    this.contributionPayload.contributor = contributor;
   if (this.donationType === 'UNIQUE'){
     this.applicantService.createUniqueApplicant(this.contributionPayload)
       .subscribe((response) => {
         this.sentInformaTionMessage(response);
         this.sendingData = false;
       }, ( error ) => {
         this.sendingData = false;
         this.showMessage(error.error);
       });
   }else {
     this.applicantService.createConstantapplicant(this.contributionPayload)
       .subscribe((response) => {
         this.sendingData = false;
         this.sentInformaTionMessage(response);
       }, ( error ) => {
         this.sendingData = false;
         this.showMessage(error.error);
       });
   }
  }

  sentDataConstant(): void{
    this.sendingData = true;
    const {country, city, address, ...user} = this.applicantForm;
    const contributor = {country, city, address, user};
    this.contributionPayload.contributor = contributor;
  }

  sentInformaTionMessage(data){
    const dialogConfig =  this.dialog.open(SentDataMessageComponent, {
      data: { data },
      disableClose: false,
      panelClass: 'icon-outside',
      autoFocus: true,
      width: '500px',
    });
    dialogConfig.afterClosed().subscribe(result => {
    });
  }

  showMessage(data: any): void{
    this.matSnackBar.openFromComponent(MessageSnackBarComponent, {
      data: { data },
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snack-style'
    });
  }
}
