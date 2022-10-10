import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ApplicantService} from '../../../services/applicant.service';
import {CellContent, CellParam, Table} from '../../../models/DTO/Table.model.';
import {ModalProcessSeedComponent} from '../modal-process-seed/modal-process-seed.component';
import {ModalViewSeedComponent} from '../modal-view-seed/modal-view-seed.component';
import {MessageSnackBarComponent} from '../../libs/message-snack-bar/message-snack-bar.component';
import {MatSnackBar} from '@angular/material/snack-bar';

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
              private matSnackBar: MatSnackBar,
              private applicantService: ApplicantService) { }

  ngOnInit(): void {
    this.getAllSeeds();
  }

  getAllSeeds(): void{
    this.loadingtable = true;
    this.applicantService.listPendingSeeds().subscribe(
      (data) => {
        this.data = data;
        this.loadingtable = false;
      }
    );
  }
  onReject(applicantId: string): void {
    const dialogConfig =  this.dialog.open(ModalProcessSeedComponent, {
      disableClose: false,
      autoFocus: true,
      width: '800px',
      data: {
        contributorId: applicantId,
        isReject: true
      }
    });
    dialogConfig.afterClosed().subscribe(result => {
      if (result){
        this.getAllSeeds();
      }
    });
  }

  onAcept(applicantId): void {
    const dialogConfig =  this.dialog.open(ModalProcessSeedComponent, {
      disableClose: false,
      autoFocus: true,
      width: '800px',
      data: {
        contributorId: applicantId,
        isReject: false
      }
    });
    dialogConfig.afterClosed().subscribe(result => {
      if (result){
        this.getAllSeeds();
      }
    });
  }

  onView(id): void{
    const dialogConfig =  this.dialog.open(ModalViewSeedComponent, {
      disableClose: false,
      autoFocus: true,
      width: '800px',
      data: {
        contributorId: id,
      }
    });
  }
  actionOutput(event: CellContent): void{
    console.log('event', event);
    const id = this.getSeedId(event.params);
    if (event.clickedAction === 'AceptSeed'){
      this.onAcept(id);
    }else if (event.clickedAction === 'RejectSeed'){
      this.onReject(id);
    } else if (event.clickedAction === 'SeedInfo'){
      this.onView(id);
    }
  }

  getSeedId(params: CellParam[]): string{
    return params.find(p => p.paramName === 'contributorId')?.paramContent;
  }

  showMessage(messages: any[]): void{
    this.matSnackBar.openFromComponent(MessageSnackBarComponent, {
      data: messages,
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snack-style'
    });
  }
}
