import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {VolunterService} from '../../../services/volunter.service';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CellContent, CellParam, Table} from '../../../models/Table.model.';
import {ViewVolunterDetailsComponent} from '../view-volunter-details/view-volunter-details.component';
import {ExitElementComponent} from '../../libs/exit-element/exit-element.component';
import {MessageSnackBarComponent} from '../../libs/message-snack-bar/message-snack-bar.component';

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

  ondelete(volunterId): void {
    const dialogRef = this.dialog.open(ExitElementComponent, {
      disableClose: false,
      panelClass: 'icon-outside',
      autoFocus: true,
      width: '500px',
      data: {
        title: 'ELIMINAR RESPONSABLE',
        question: 'Al confirmar se eliminará al responsable  ' +
          ' ¿ Está seguro de desactivarlo ?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.status === 'afirmative'){
        const payload = {
          volunteerId: volunterId
        };
        this.voluntersService.deleteVolunter(payload)
          .subscribe(( result ) => {
            this.showMessage(result);
            console.log('done', result);
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
