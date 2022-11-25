import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {VolunterService} from '../../../core/services/volunter.service';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SouvenirTrackingService} from '../../../core/services/souvenir-tracking.service';
import {Table} from '../../../core/models/Table.model.';
import {VolunterDialogComponent} from '../../admin/volunter-dialog/volunter-dialog.component';
import {BenefitedSeedDialogComponent} from '../benefited-seed-dialog/benefited-seed-dialog.component';

@Component({
  selector: 'app-benefited-seeds',
  templateUrl: './benefited-seeds.component.html',
  styleUrls: ['./benefited-seeds.component.scss']
})
export class BenefitedSeedsComponent implements OnInit{
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
    this.getBenefitedSeeds();
  }


  getBenefitedSeeds(){
    this.loadingTable = true;
    this.souvenirService.listBenefitedSeeds("e")
      .subscribe((data) => {
        this.benefitedSeeds = data;
        this.loadingTable = false;
      },(error => {
        this.loadingTable = false;
      }))
  }

  outputEvent(event){

  }

  onAdding(){
    const dialogRef = this.dialog.open(BenefitedSeedDialogComponent, {
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
      if (result) { this.getBenefitedSeeds(); }
    });
  }

   beginDate(date: Date){
    return date ?  date.getDate() + '/'+ date.getMonth() + '/' + date.getFullYear() : '';
  }
}
