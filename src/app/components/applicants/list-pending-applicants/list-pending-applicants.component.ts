import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Applicant} from '../../../models/applicant.model';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {ApplicantService} from '../../../services/applicant.service';
import {MatSort, Sort} from '@angular/material/sort';
import {CellContent, Table} from '../../../models/DTO/Table.model.';

@Component({
  selector: 'app-list-pending-applicants',
  templateUrl: './list-pending-applicants.component.html',
  styleUrls: ['./list-pending-applicants.component.scss']
})
export class ListPendingApplicantsComponent implements OnInit {
  loadingtable = true;
  data: Table;
  constructor(private router: Router,
              private dialog: MatDialog,
              private applicantService: ApplicantService) { }

  ngOnInit(): void {
      this.getAllSeeds();
  }

  getAllSeeds(): void{
    this.loadingtable = true;
    this.applicantService.listAllseeds().subscribe(
      (data) => {
        this.data = data;
        this.loadingtable = false;
      }
    );
  }
  onReject(/*applicant: Applicant*/): void {
    console.log('onReject');
    // this.applicantService.formData = applicant;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    dialogConfig.maxHeight = '35%';
    // this.dialog.open(RejectaspirantesComponent, dialogConfig);
    // localStorage.setItem("volunter_id", applicant.applicant_id.toString());

  }

  onAcept(): void {
    console.log('onAcept');
    // this.applicantService.formData = applicant;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    dialogConfig.maxHeight = '35%';
    // this.dialog.open(AceptaraspiranteComponent, dialogConfig);
    // localStorage.setItem("volunter_id", applicant.applicant_id.toString());

  }

  onView(): void{
    console.log('onview');
  }
  actionOutput(event: CellContent): void{
    console.log('event', event);
    if (event.clickedAction === 'AceptSeed'){
      this.onAcept();
    }else if (event.clickedAction === 'RejectSeed'){
      this.onReject();
    } else if (event.clickedAction === 'SeedInfo'){
      this.onView();
    }
  }
}
