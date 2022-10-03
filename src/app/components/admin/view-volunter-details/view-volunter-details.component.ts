import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {VolunterService} from '../../../services/volunter.service';
import {Volunter} from '../../../models/volunter.model';
import {switchMap} from 'rxjs/operators';


export interface DialogData {
  volunterId: string;
}

@Component({
  selector: 'app-view-volunter-details',
  templateUrl: './view-volunter-details.component.html',
  styleUrls: ['./view-volunter-details.component.scss']
})
export class ViewVolunterDetailsComponent implements OnInit {
  cargandoVoluntario = true;
  volunter: Volunter;
  title: string;
  messageRoles = '' ;
  constructor(public dialogRef: MatDialogRef<ViewVolunterDetailsComponent>,
              private volunterService: VolunterService,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getVolunter();
    }, 1000);
  }
  getVolunter(): void{
    this.volunterService.getvolunter(this.data.volunterId).pipe()
      .subscribe((response) => {
      this.volunter = response;
      this.cargandoVoluntario = false;
      this.messageRoles = this.volunter.roles.length > 0 ? '' : 'No existen roles para este Voluntario';
      console.log('this', this.messageRoles, this.volunter);
    });
  }
  close(): void {
    this.dialogRef.close();
  }

}
