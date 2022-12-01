import { Component, OnInit } from '@angular/core';
import {CellContent, Table} from '../../../core/models/Table.model.';
import {MatDialog} from '@angular/material/dialog';
import {ApplicantService} from '../../../core/services/applicant.service';

@Component({
  selector: 'app-list-rejected-applicants',
  templateUrl: './list-rejected-applicants.component.html',
  styleUrls: ['./list-rejected-applicants.component.scss']
})
export class ListRejectedApplicantsComponent implements OnInit {
  loadingtable = true;
  data: Table;
  constructor(private dialog: MatDialog,
              private applicantService: ApplicantService) { }

  ngOnInit(): void {
    this.getAllSeeds();
  }
  getAllSeeds(): void{
    this.loadingtable = true;
    this.applicantService.listRejectedSeeds().subscribe(
      (data) => {
        this.data = data;
        this.loadingtable = false;
      }
    );
  }
  actionOutput(event: CellContent): void{
    console.log('event', event);
    if (event.clickedAction === 'SeeInfo'){
      this.onView();
    }
  }

  onView(): void{
    console.log('onview');
  }
}
