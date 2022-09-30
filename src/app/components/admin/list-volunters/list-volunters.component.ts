import { Component, OnInit } from '@angular/core';
import {Volunter} from '../../../models/volunter.model';
import {Router} from '@angular/router';
import {VolunterService} from '../../../services/volunter.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ViewVolunterDetailsComponent} from '../view-volunter-details/view-volunter-details.component';
import {VolunterDialogComponent} from '../volunter-dialog/volunter-dialog.component';

@Component({
  selector: 'app-list-volunters',
  templateUrl: './list-volunters.component.html',
  styleUrls: ['./list-volunters.component.scss']
})
export class ListVoluntersComponent implements OnInit {


  volunters: Volunter[] = [];

  constructor(private router: Router, private voluntersService: VolunterService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getVolunters();
  }

  getVolunters(): void{
    this.voluntersService.listvolunters()
      .subscribe(data => {
        this.volunters = data;
      });
  }
  onedit(volunter: any): void {
    this.voluntersService.formData = volunter;
    const dialogRef = this.dialog.open(VolunterDialogComponent, {
      disableClose: false,
      autoFocus: true,
      width: '70%',
      data: {
        volunterId: volunter.volunter_id,
        edit: true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.volunters = result;
    });
  }

  onAdding(): void {
    // this.voluntersService.formData = volunter;
    const dialogRef = this.dialog.open(VolunterDialogComponent, {
      disableClose: false,
      autoFocus: true,
      width: '800px',
      data: {
        volunterId: null,
        edit: false
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.volunters = result;
    });
  }

  onview(volunter: Volunter): void {
    //console.log('volunter', volunter );
    const dialogRef = this.dialog.open(ViewVolunterDetailsComponent, {
      disableClose: false,
      autoFocus: true,
      width: '50%',
      data: {
        volunterId: volunter.volunter_id
      }
    });
  }
  ondelete(volunter: Volunter): void {
    /*this.voluntersService.formData = volunter;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.maxHeight = "35%";
    this.dialog.open(ExitvolunterComponent, dialogConfig);
    localStorage.setItem("volunter_id", volunter.volunter_id.toString());*/

  }

}
