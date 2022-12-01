import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Applicant} from '../../../core/models/applicant.model';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {ApplicantService} from '../../../core/services/applicant.service';
import {MatSort, Sort} from '@angular/material/sort';
import {CellContent, Table} from '../../../core/models/Table.model.';

const applicants = [];

@Component({
  selector: 'app-list-approved-applicants',
  templateUrl: './list-approved-applicants.component.html',
  styleUrls: ['./list-approved-applicants.component.scss']
})


export class ListApprovedApplicantsComponent implements OnInit {
  loadingtable = true;
  data: Table;
  constructor(private router: Router,
              private dialog: MatDialog,
             // private _liveAnnouncer: LiveAnnouncer,
              private applicantService: ApplicantService) { }

  ngOnInit(): void {
    this.getAprovedSeeds();
  }

  getAprovedSeeds(): void{
    this.loadingtable = true;
    this.applicantService.listOficialSeeds().subscribe(
      (data) => {
        this.data = data;
        this.loadingtable = false;
      }
    );
  }

  actionOutput(event: CellContent): void{
    console.log('event', event);
    if (event.clickedAction === 'AceptSeed'){
      //this.onAcept();
    }else if (event.clickedAction === 'RejectSeed'){
      //this.onReject();
    } else if (event.clickedAction === 'SeedInfo'){
      this.onView();
    }
  }
  onView(): void{
    console.log('onview');
  }
  /*displayedColumns: string[] = ['name', 'email', 'celular', 'send_date',
    'acepted_date', 'contributionType', 'acciones'];
*/
  //dataSource = new MatTableDataSource(applicants);
  //@ViewChild(MatSort) sort: MatSort;

 /* applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {

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
  }*/
}
