import { Component, OnInit } from '@angular/core';
import {TrackingService} from '../../../services/tracking.service';
import {BoxSeed} from '../../../models/Seed.model';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

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
    beginDate: [null, Validators.required],
    endDate: [null, Validators.required]
  });
  constructor(private trackingService: TrackingService,
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
}
