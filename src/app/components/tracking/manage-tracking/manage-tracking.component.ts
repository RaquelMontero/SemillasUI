import { Component, OnInit } from '@angular/core';
import {CellContent, Table} from '../../../models/Table.model.';
import {VolunterService} from '../../../services/volunter.service';
import {MatDialog} from '@angular/material/dialog';
import {ModalProcessSeedComponent} from '../../applicants/modal-process-seed/modal-process-seed.component';
import {AsignSeedToVolunterComponent} from '../asign-seed-to-volunter/asign-seed-to-volunter.component';

@Component({
  selector: 'app-manage-tracking',
  templateUrl: './manage-tracking.component.html',
  styleUrls: ['./manage-tracking.component.scss']
})
export class ManageTrackingComponent implements OnInit {
  index = 0;
  loadingtable = true;
  data: Table;
  idSelectedVolunter: string;
  constructor(private volunterService: VolunterService,
              private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getTrackingVolunters();
  }
  getTrackingVolunters(): void{
    this.loadingtable = true;
    this.volunterService.listTrackingvolunters().subscribe(
      (data) => {
        this.data = data;
        this.loadingtable = false;
      }
    );
  }

  actionOutput(event: CellContent): void{
    console.log('event', event);
    this.idSelectedVolunter = event.params[0].paramContent;
    if (event.clickedAction === 'ViewAssignedSeeds'){
      this.index = 1;
    }else if (event.clickedAction === 'AssignSeed'){
      this.openAssinDialog(this.idSelectedVolunter);
    }
  }
  onTabChanged(evento){}

  openAssinDialog(id){
    const dialogConfig =  this.dialog.open(AsignSeedToVolunterComponent, {
      disableClose: false,
      panelClass: 'icon-outside',
      autoFocus: true,
      width: '800px',
      data: {
        contributorId: id,
        isReject: false
      }
    });
    dialogConfig.afterClosed().subscribe(result => {
      if (result){
        this.getTrackingVolunters();
      }
    });
  }

  back(evento){
    this.index = 0;
  }
}