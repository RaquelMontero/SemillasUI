import {Component, Inject, OnInit} from '@angular/core';
import {MessageSnackBarComponent} from '../../../shared/message-snack-bar/message-snack-bar.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TrackingService} from '../../../core/services/tracking.service';
import {OauthService} from '../../../core/services/auth/oauth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SouvenirTrackingService} from '../../../core/services/souvenir-tracking.service';
import {Observable} from 'rxjs';
import {BoxSeed} from '../../../core/models/Seed.model';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatOptionSelectionChange} from '@angular/material/core';
import {map, startWith} from 'rxjs/operators';

export interface DialogData {
  volunterId: string;
  edit: boolean;
}

@Component({
  selector: 'app-souvenir-trackind-dialog',
  templateUrl: './souvenir-trackind-dialog.component.html',
  styleUrls: ['./souvenir-trackind-dialog.component.scss']
})
export class SouvenirTrackindDialogComponent implements OnInit{
  benefitedForm = this.fb.group({
    searchValue: null,
    souvenirTrackingId: [null],
    souvenir_send_date: [null, Validators.required],
    trackingStatus: [null, Validators.required],
    benefitedCollaboratorId: [null, Validators.required],
    spentAmount:[ null, Validators.required],
    volunteerInChargeId: [null, Validators.required],
    souvenirTrackingComments: new FormArray([])
  })
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private fb: FormBuilder,
              private trackingService: TrackingService,
              private oauthService: OauthService,
              private matSnackBar: MatSnackBar,
              private souvenirService: SouvenirTrackingService,
              public dialogRef: MatDialogRef<SouvenirTrackindDialogComponent>) {
  }
  filteredBenefitedSeeds: Observable<BoxSeed[]>;
  allBenefitedSeeds: BoxSeed[] = [];
  loadingAll = true;
  ngOnInit(): void {
    this.getActiveSeeds();
    this.getCurrentUser();
  }

  getActiveSeeds(): void{
    this.souvenirService.getActiveSeeds()
      .subscribe((data) => {
        this.allBenefitedSeeds = data;
        this.loadingAll = false;
        this.filteredBenefitedSeeds = this.benefitedForm.get('searchValue').valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      }, (error) => {
        this.loadingAll = false;
      });
  }

  private _filter(value): BoxSeed[] {
    if (typeof  value === 'string'){
      const filterValue = value.toLowerCase();
      return this.allBenefitedSeeds.filter(option =>
        option.largename.toLowerCase().includes(filterValue) ||
        option.dni.toLowerCase().includes(filterValue) ||
        option.email.toLowerCase().includes(filterValue)
      );
    }
  }
  getCurrentUser(){
    this.oauthService.getCurrentUser().subscribe((data)=> {
      this.benefitedForm.get('volunteerInChargeId').setValue(data.volunterId);
    })
  }
  showMessage(data: any): void{
    this.matSnackBar.openFromComponent(MessageSnackBarComponent, {
      data: { data },
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snack-style'
    });
  }
  selected(evento: MatAutocompleteSelectedEvent){
    this.benefitedForm.get('benefitedCollaboratorId').setValue(evento.option.value.contributor_id);
    console.log('selected', evento);
  }
  updateMySelection(evento: MatOptionSelectionChange): void{
    this.benefitedForm.patchValue({
      searchValue: evento.source.value.largename
    });
    console.log('eventochange', evento.source.value);
  }
  getBenefitedSeeds(){

  }
  get confirmButton(){
    return 'GUARDAR REGISTRO'
  }
  get getTitle(){
    return 'SEGUMIENTO DE ENVÍO'
  }
  get benefitedSeed(): any {
    return this.benefitedForm.get('benefitedCollaboratorId');
  }
  getErrorMessageSeed(){
    if (this.benefitedForm.get('benefitedCollaboratorId').hasError('required')){
      return 'Debe identificar a la semilla beneficiada';
    }
  }

  onSubmit(){
    const payload = this.benefitedForm.value;
    this.souvenirService.addSouvenirTrackinfReg(payload)
      .subscribe((data) =>{
        this.showMessage(data);
      },(error => {
        this.showMessage(error.error);
      }))
  }
  get souvenirTrackingComments(): FormArray{
    return this.benefitedForm.get('souvenirTrackingComments') as FormArray;
  }
  addTrackingComments() {
    this.souvenirTrackingComments.push(this.newTrackingComment());
  }
  newTrackingComment(): FormGroup{
    return this.fb.group({
      commentRecordId: [null],
      comment: [null, Validators.required],
      registerVolunteerId: [null]
    })
  }
  removeTrackingComment(i:number) {
    console.log('asasas', i);
    this.souvenirTrackingComments.removeAt(i);
  }
}
