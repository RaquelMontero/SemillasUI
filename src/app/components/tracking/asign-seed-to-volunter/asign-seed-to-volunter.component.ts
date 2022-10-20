import {Component, Inject, OnInit} from '@angular/core';
import {TrackingService} from '../../../services/tracking.service';
import {BoxSeed} from '../../../models/Seed.model';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatOptionSelectionChange} from '@angular/material/core';
import {Volunter} from '../../../models/volunter.model';
import {VolunterService} from '../../../services/volunter.service';
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
    private form: FormBuilder) { }

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
        this.dialogRef.close();
        console.log('data');
      });
  }

  getVolunterById(): void{
    this.volunteerService.getvolunter(this.data.volunterId)
      .subscribe((data) => {
        this.volunter = data ;
        this.assignForm.get('volunter_id').setValue(this.data.volunterId);
      });
  }
}
