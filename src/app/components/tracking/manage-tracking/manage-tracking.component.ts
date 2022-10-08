import { Component, OnInit } from '@angular/core';
import {CellContent, Table} from '../../../models/DTO/Table.model.';
import {VolunterService} from '../../../services/volunter.service';

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
  constructor(private volunterService: VolunterService) { }

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
      this.openAssinDialog();
    }
  }
  onTabChanged(evento){}

  openAssinDialog(){

  }
}
