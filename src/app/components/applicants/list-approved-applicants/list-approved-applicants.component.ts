import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Applicant} from '../../../models/applicant.model';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {ApplicantService} from '../../../services/applicant.service';
import {MatSort, Sort} from '@angular/material/sort';

const applicants = [];

@Component({
  selector: 'app-list-approved-applicants',
  templateUrl: './list-approved-applicants.component.html',
  styleUrls: ['./list-approved-applicants.component.scss']
})


export class ListApprovedApplicantsComponent implements AfterViewInit {
  constructor(private router: Router,
              private dialog: MatDialog,
              // tslint:disable-next-line:variable-name
              private _liveAnnouncer: LiveAnnouncer,
              private applicantService: ApplicantService) { }
  /*displayedColumns: string[] = ['name', 'email', 'celular', 'send_date',
    'acepted_date', 'contributionType', 'acciones'];
*/
  dataSource = new MatTableDataSource(applicants);
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    /*this.dataSource.sort = this.sort;
    this.applicantService.listAllseeds()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      });*/
  }

  announceSortChange(sortState: Sort): void {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  viewDetails(contributor: any): void{
    console.log(contributor);
  }
}
