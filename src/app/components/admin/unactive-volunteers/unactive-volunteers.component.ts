import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {VolunterService} from '../../../core/services/volunter.service';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CellContent, CellParam, Table} from '../../../core/models/Table.model.';
import {ViewVolunterDetailsComponent} from '../view-volunter-details/view-volunter-details.component';
import {ExitElementComponent} from '../../../shared/exit-element/exit-element.component';
import {MessageSnackBarComponent} from '../../../shared/message-snack-bar/message-snack-bar.component';

@Component({
  selector: 'app-unactive-volunteers',
  templateUrl: './unactive-volunteers.component.html',
  styleUrls: ['./unactive-volunteers.component.scss']
})
export class UnactiveVolunteersComponent implements OnInit {
  volunteers: Table;
  loadingVolunteers = true;
  constructor(private router: Router,
              private voluntersService: VolunterService,
              private dialog: MatDialog,
              private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getUnactiveVolunters();
  }
  getUnactiveVolunters(): void{
    this.loadingVolunteers = true;
    this.voluntersService.listExitevolunters()
      .subscribe(data => {
        this.volunteers = data;
        this.loadingVolunteers = false;
      }, ( error ) => {
        this.loadingVolunteers = false;
      });
  }


  outputEvent(event: CellContent): void{
    console.log('event', event);
    const id = this.getVolunteerId(event.params);

    if (event.clickedAction === 'deleteVolunter'){
      this.ondelete(id);
    }else if (event.clickedAction === 'seeVolunter'){
      this.onview(id);
    }
  }

  getVolunteerId(params: CellParam[]): string{
    return params.find(p => p.paramName === 'volunterId').paramContent;
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

  ondelete(id): void {
    const dialogRef = this.dialog.open(ExitElementComponent, {
      disableClose: false,
      panelClass: 'icon-outside',
      autoFocus: true,
      width: '500px',
      data: {
        isDelete: true,
        title: 'ELIMINAR RESPONSABLE',
        question: 'Al confirmar se eliminará al responsable y todos los registro relacionados ' +
          ' ¿ Está seguro de eliminarlo ?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.status === 'afirmative'){
        this.voluntersService.deleteVolunter(id)
          .subscribe(( res ) => {
            this.showMessage(res);
            console.log('done', res);
          }, ( error ) => {
            this.showMessage(error);
          });
      }
    });
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
}
