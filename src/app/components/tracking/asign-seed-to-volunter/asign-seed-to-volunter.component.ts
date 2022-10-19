import {Component, Inject, OnInit} from '@angular/core';
import {TrackingService} from '../../../services/tracking.service';
import {BoxSeed} from '../../../models/Seed.model';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatOptionSelectionChange} from '@angular/material/core';
export interface DialogData {
  contributorId: string;
  //isReject: boolean;
}
@Component({
  selector: 'app-asign-seed-to-volunter',
  templateUrl: './asign-seed-to-volunter.component.html',
  styleUrls: ['./asign-seed-to-volunter.component.scss']
})
export class AsignSeedToVolunterComponent implements OnInit {
  filteredSeeds: Observable<BoxSeed[]>;
  allSeeds: BoxSeed[] = [];
  loadingAll = true;
  startDate = new Date(1990, 0, 1);
  assignForm = this.form.group({
    searchValue: [],
    idContributor: [null, Validators.required],
    idVolunter: [null, Validators.required],
    start_date: [null, Validators.required],
    end_date: [null, Validators.required]
  });
  constructor(
    public dialogRef: MatDialogRef<AsignSeedToVolunterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private trackingService: TrackingService,
    private form: FormBuilder) { }

  ngOnInit(): void {
    this.getActiveSeeds();
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
      .subscribe((data)=>{
        console.log('data');
      })

  }
}
