import {Component, OnInit, Output} from '@angular/core';
import {CellContent, Table} from '../../../../models/Table.model.';
import {ApplicantService} from '../../../../services/applicant.service';
import {VolunterService} from '../../../../services/volunter.service';

@Component({
  selector: 'app-list-tracking-volunters',
  templateUrl: './list-tracking-volunters.component.html',
  styleUrls: ['./list-tracking-volunters.component.scss']
})
export class ListTrackingVoluntersComponent implements OnInit {
  loadingtable = true;
  data: Table;
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
    if (event.clickedAction === 'ViewAssignedSeeds'){
      //this.onAcept();
    }else if (event.clickedAction === 'AssignSeed'){
      //this.onReject();
    }
  }
}
