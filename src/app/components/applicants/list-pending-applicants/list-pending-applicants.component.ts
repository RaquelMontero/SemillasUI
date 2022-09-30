import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Applicant} from '../../../models/applicant.model';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {ApplicantService} from '../../../services/applicant.service';
import {MatSort, Sort} from '@angular/material/sort';
import {Car} from '../../../models/Car';

const applicants: Applicant[] = [];

const list = [{id: 1,
  maker: 'Chevrolet', model: 'Sportvan G20', year: 1993},
  {id: 2, maker: 'Jeep', model: 'Patriot', year: 2007},
  {id: 3, maker: 'Ferrari', model: '612 Scaglietti', year: 2008},
  {id: 4, maker: 'Ford', model: 'Thunderbird', year: 1995},
  {id: 5, maker: 'GMC', model: 'Canyon', year: 2012},
  {id: 6, maker: 'Volvo', model: 'V70', year: 2009},
  {id: 7, maker: 'Suzuki', model: 'Grand Vitara', year: 2010},
  {id: 8, maker: 'Ford', model: 'Escort', year: 1990},
  {id: 9, maker: 'Toyota', model: 'Yaris', year: 2009},
  {id: 10, maker: 'Infiniti', model: 'M', year: 2003}];

@Component({
  selector: 'app-list-pending-applicants',
  templateUrl: './list-pending-applicants.component.html',
  styleUrls: ['./list-pending-applicants.component.scss']
})
export class ListPendingApplicantsComponent implements AfterViewInit {
  data: Car[] = list;
  constructor(private router: Router,
              private dialog: MatDialog,
              // tslint:disable-next-line:variable-name
              private _liveAnnouncer: LiveAnnouncer,
              private applicantService: ApplicantService) { }
  displayedColumns: string[] = ['name', 'email', 'celular', 'send_date', 'contributionType', 'acciones'];
  dataSource = new MatTableDataSource(applicants);
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.applicantService.listApplicants()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      });
  }
  announceSortChange(sortState: Sort): void {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onReject(applicant: Applicant): void {
    this.applicantService.formData = applicant;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    dialogConfig.maxHeight = '35%';
    // this.dialog.open(RejectaspirantesComponent, dialogConfig);
    // localStorage.setItem("volunter_id", applicant.applicant_id.toString());

  }

  onAcept(applicant: Applicant): void {
    this.applicantService.formData = applicant;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    dialogConfig.maxHeight = '35%';
    // this.dialog.open(AceptaraspiranteComponent, dialogConfig);
    // localStorage.setItem("volunter_id", applicant.applicant_id.toString());

  }
}
