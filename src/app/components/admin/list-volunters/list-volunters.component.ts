import { Component, OnInit } from '@angular/core';
import {Volunter} from '../../../models/volunter.model';
import {Router} from '@angular/router';
import {VolunterService} from '../../../services/volunter.service';
import {MatDialog} from '@angular/material/dialog';

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
   /* this.voluntersService.formData = volunter;
    this.router.navigate(["/editvolunter"]);*/
  }


  onview(volunter: Volunter): void {
    /*this.voluntersService.formData = volunter;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.maxHeight = "60%";
    this.dialog.open(VervolunterComponent, dialogConfig);
    localStorage.setItem("volunter_id", volunter.volunter_id.toString());*/

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
