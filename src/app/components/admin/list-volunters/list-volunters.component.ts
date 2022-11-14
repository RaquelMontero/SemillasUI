import { Component, OnInit } from '@angular/core';
import {Volunter} from '../../../models/volunter.model';
import {Router} from '@angular/router';
import {VolunterService} from '../../../services/volunter.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ViewVolunterDetailsComponent} from '../view-volunter-details/view-volunter-details.component';
import {VolunterDialogComponent} from '../volunter-dialog/volunter-dialog.component';
import {CellContent, CellParam, Table} from '../../../models/Table.model.';
import {ExitElementComponent} from '../../libs/exit-element/exit-element.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MessageSnackBarComponent} from '../../libs/message-snack-bar/message-snack-bar.component';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-list-volunters',
  templateUrl: './list-volunters.component.html',
  styleUrls: ['./list-volunters.component.scss']
})
export class ListVoluntersComponent implements OnInit {
  volunteers: Table;
  loadingVolunteers = true;
  constructor(private router: Router,
              private voluntersService: VolunterService,
              private dialog: MatDialog,
              private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getVolunters();
  }

  getVolunters(): void{
    this.loadingVolunteers = true;
    this.voluntersService.listvolunters()
      .subscribe(data => {
        this.volunteers = data;
        this.loadingVolunteers = false;
      }, ( error ) => {
        this.loadingVolunteers = false;
      });
  }
  onedit(volunterid: any): void {
    const dialogRef = this.dialog.open(VolunterDialogComponent, {
      disableClose: false,
      panelClass: 'icon-outside',
      autoFocus: true,
      width: '800px',
      data: {
        volunterId: volunterid,
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
      panelClass: 'icon-outside',
      width: '800px',
      data: {
        volunterId: null,
        edit: false
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) { this.getVolunters(); }
    });
  }

  onview(volunterId): void {
    const dialogRef = this.dialog.open(ViewVolunterDetailsComponent, {
      disableClose: false,
      autoFocus: true,
      panelClass: 'icon-outside',
      width: '50%',
      data: {
        volunterId
      }
    });
  }
  ondelete(volunterId): void {
    const dialogRef = this.dialog.open(ExitElementComponent, {
      disableClose: false,
      panelClass: 'icon-outside',
      autoFocus: true,
      width: '500px',
      data: {
        title: 'DESACTIVAR RESPONSABLE',
        question: 'Al confirmar se desativará al responsable y solo ' +
          'podrá verlo en el menú de responsables desactivados,' +
          ' ¿ Está seguro de desactivarlo ?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.status === 'afirmative'){
        const payload = {
          message: result.message,
          volunteerId: volunterId
        };
        this.voluntersService.exitvolunter(payload)
          .subscribe(( result ) => {
            this.showMessage(result);
            console.log('done', result);
          });
      }
    });
  }

  outputEvent(event: CellContent): void{
    console.log('event', event);
    const id = this.getVolunteerId(event.params);
    if (event.clickedAction === 'editVolunter'){
      this.onedit(id);
    } else if (event.clickedAction === 'seeVolunter'){
      this.onview(id);
    } else if (event.clickedAction === 'deleteVolunter'){
      this.ondelete(id);
    }
  }

  getVolunteerId(params: CellParam[]): string{
    return params.find(p => p.paramName === 'volunterId').paramContent;
  }

  showMessage(data: any): void{
    this.matSnackBar.openFromComponent(MessageSnackBarComponent, {
      data: { data },
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snack-style'
    });
  }

  public openPDF(): void {
    const DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      const fileWidth = 208;
      const fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
}
