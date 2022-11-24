import {Component, Inject, OnInit} from '@angular/core';
import {TrackingService} from '../../../core/services/tracking.service';
import {BoxSeed} from '../../../core/models/Seed.model';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatOptionSelectionChange} from '@angular/material/core';
import {Volunter} from '../../../core/models/volunter.model';
import {VolunterService} from '../../../core/services/volunter.service';
import {MessageSnackBarComponent} from '../../../shared/message-snack-bar/message-snack-bar.component';
import {MatSnackBar} from '@angular/material/snack-bar';
export interface DialogData {
  volunterId: string;
}
@Component({
  selector: 'app-asign-seed-to-volunter',
  templateUrl: './asign-seed-to-volunter.component.html',
  styleUrls: ['./asign-seed-to-volunter.component.scss']
})
export class AsignSeedToVolunterComponent implements OnInit {
  filteredSeeds: Observable<BoxSeed[]>;
  volunter: Volunter = null;
  allSeeds: BoxSeed[] = [];
  loadingAll = true;
  startDate = new Date();
  assignForm = this.form.group({
    searchValue: [],
    contributor_id: [null, Validators.required],
    volunter_id: [null, Validators.required],
    start_date: [null, Validators.required],
    end_date: [null, Validators.required]
  });
  constructor(
    public dialogRef: MatDialogRef<AsignSeedToVolunterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private trackingService: TrackingService,
    private volunteerService: VolunterService,
    private matSnackBar: MatSnackBar,
    private form: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.getActiveSeeds();
    this.getVolunterById();
  }
  getActiveSeeds(): void{
    this.trackingService.getActiveSeeds()
      .subscribe((data) => {
        this.allSeeds = data;
        this.loadingAll = false;
        this.filteredSeeds = this.assignForm.get('searchValue').valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      }, (error) => {
        this.loadingAll = false;
      });
  }
  selected(evento: MatAutocompleteSelectedEvent){
    this.assignForm.get('contributor_id').setValue(evento.option.value.contributor_id);
    console.log('selected', evento);
  }
  updateMySelection(evento: MatOptionSelectionChange): void{
    this.assignForm.patchValue({
      searchValue: evento.source.value.largename
    });
    console.log('eventochange', evento.source.value);
  }
  private _filter(value: string): BoxSeed[] {
    if (typeof  value === 'string'){
      const filterValue = value.toLowerCase();
      return this.allSeeds.filter(option =>
        option.largename.toLowerCase().includes(filterValue) ||
        option.dni.toLowerCase().includes(filterValue) ||
        option.email.toLowerCase().includes(filterValue)
      );
    }
  }

  confirm(){
    const form = this.assignForm.value;
    this.trackingService.saveTrackingAssign(form)
      .subscribe((data) => {
        this.showMessage(data);
        this.dialogRef.close('success');
      },(error => {
        this.showMessage(error.error);
      }));
  }

  getVolunterById(): void{
    this.volunteerService.getvolunter(this.data.volunterId)
      .subscribe((data) => {
        this.volunter = data ;
        this.assignForm.get('volunter_id').setValue(this.data.volunterId);
      });
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
