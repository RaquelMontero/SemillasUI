import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, UntypedFormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {BoxSeed} from '../../../core/models/Seed.model';
import {map, startWith} from 'rxjs/operators';
import {TrackingService} from '../../../core/services/tracking.service';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatOptionSelectionChange} from '@angular/material/core';
import {OauthService} from '../../../core/services/auth/oauth.service';
import {SouvenirTrackingService} from '../../../core/services/souvenir-tracking.service';
import {MessageSnackBarComponent} from '../../../shared/message-snack-bar/message-snack-bar.component';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface DialogData {
  volunterId: string;
  edit: boolean;
}
@Component({
  selector: 'app-benefited-seed-dialog',
  templateUrl: './benefited-seed-dialog.component.html',
  styleUrls: ['./benefited-seed-dialog.component.scss']
})
export class BenefitedSeedDialogComponent implements OnInit{
  benefitedForm = this.fb.group({
    searchValue: null,
    selected_date: [new Date(), Validators.required],
    observation: [null, Validators.maxLength(200)],
    city: [null, Validators.required],
    contributorId:[ null, Validators.required],
    volunteerInChargeId: [null, Validators.required]
  })
  filteredSeeds: Observable<BoxSeed[]>;
  allSeeds: BoxSeed[] = [];
  loadingAll = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private fb: FormBuilder,
              private trackingService: TrackingService,
              private oauthService: OauthService,
              private matSnackBar: MatSnackBar,
              private souvenirService: SouvenirTrackingService,
              public dialogRef: MatDialogRef<BenefitedSeedDialogComponent>) {
  }
  ngOnInit(): void {
    this.getActiveSeeds();
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.oauthService.getCurrentUser().subscribe((data)=> {
      this.benefitedForm.get('volunteerInChargeId').setValue(data.volunterId);
    })
  }
  getActiveSeeds(): void{
    this.trackingService.getActiveSeeds()
      .subscribe((data) => {
        this.allSeeds = data;
        this.loadingAll = false;
        this.filteredSeeds = this.benefitedForm.get('searchValue').valueChanges.pipe(
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
      return this.allSeeds.filter(option =>
        option.largename.toLowerCase().includes(filterValue) ||
        option.dni.toLowerCase().includes(filterValue) ||
        option.email.toLowerCase().includes(filterValue)
      );
    }
  }
  selected(evento: MatAutocompleteSelectedEvent){
    this.benefitedForm.get('contributorId').setValue(evento.option.value.contributor_id);
    console.log('selected', evento);
  }
  updateMySelection(evento: MatOptionSelectionChange): void{
    this.benefitedForm.patchValue({
      searchValue: evento.source.value.largename
    });
    console.log('eventochange', evento.source.value);
  }
  get getTitle(): string{
    return this.data.edit ? 'REGISTRAR BENEFICIADO' : 'EDITAR BENEFICIADO';
  }

  onSubmit(){
    const payload = this.benefitedForm.value;
    this.souvenirService.addBenefitedSeed(payload)
      .subscribe((data) =>{
        this.showMessage(data);
        this.dialogRef.close('success');
      },(error => {
        this.showMessage(error.error);
      }))
  }

  get confirmButton(): string{
    return this.data.edit ? 'GUARDAR' : 'GUARDAR';
  }

  get benefitedSeed(): any {
    return this.benefitedForm.get('contributorId');
  }
  get city(): any {
    return this.benefitedForm.get('city');
  }

  get observation(): any {
    return this.benefitedForm.get('observation');
  }
  getErrorMessageCity(){
    if (this.benefitedForm.get('city').hasError('required')){
      return 'La ciudad es requerida';
    }
  }
  getErrorMessageSeed(){
    if (this.benefitedForm.get('contributorId').hasError('required')){
      return 'Debe identificar a la semilla';
    }
  }

  showMessage(data: any): void{
    console.log('errormessage', data);
    this.matSnackBar.openFromComponent(MessageSnackBarComponent, {
      data: { data },
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snack-style'
    });
  }
}
