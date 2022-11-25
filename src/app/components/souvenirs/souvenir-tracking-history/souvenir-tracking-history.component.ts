import {Component, OnInit} from '@angular/core';
import {Table} from '../../../core/models/Table.model.';
import {Router} from '@angular/router';
import {SouvenirTrackingService} from '../../../core/services/souvenir-tracking.service';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BenefitedSeedDialogComponent} from '../benefited-seed-dialog/benefited-seed-dialog.component';
import {SouvenirTrackindDialogComponent} from '../souvenir-trackind-dialog/souvenir-trackind-dialog.component';

@Component({
  selector: 'app-souvenir-tracking-history',
  templateUrl: './souvenir-tracking-history.component.html',
  styleUrls: ['./souvenir-tracking-history.component.scss']
})
export class SouvenirTrackingHistoryComponent implements OnInit{
  benefitedSeeds: Table;
  loadingTable = true;
  lastStatus = '';
  filterForm = this.formBuilder.group({
    state: [null],
    beginSelectedDate:[new Date(new Date().setFullYear(new Date().getFullYear() - 1))],
    endSelectedDate:[new Date()]
  });
  constructor(private router: Router,
              private souvenirService: SouvenirTrackingService,
              private dialog: MatDialog,
              private formBuilder: FormBuilder,
              private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  onAdding(){
    const dialogRef = this.dialog.open(SouvenirTrackindDialogComponent, {
      disableClose: false,
      autoFocus: true,
      panelClass: 'icon-outside',
      width: '800px',
      data: {
        ///volunterId: null,
        edit: false
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) { this.getSouvenirTrackingHistory(); }
    });
  }

  getSouvenirTrackingHistory(){
    this.loadingTable = true;
    this.souvenirService.getSouvenirTrackingHistory("e")
      .subscribe((data) => {
        this.benefitedSeeds = data;
        this.loadingTable = false;
      },(error => {
        this.loadingTable = false;
      }))
  }
  beginDate(date: Date){
    return date ?  date.getDate() + '/'+ date.getMonth() + '/' + date.getFullYear() : '';
  }
}
