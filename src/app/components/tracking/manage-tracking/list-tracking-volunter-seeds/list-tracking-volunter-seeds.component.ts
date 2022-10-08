import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TrackingService} from '../../../../services/tracking.service';
import {Table} from '../../../../models/DTO/Table.model.';

@Component({
  selector: 'app-list-tracking-volunter-seeds',
  templateUrl: './list-tracking-volunter-seeds.component.html',
  styleUrls: ['./list-tracking-volunter-seeds.component.scss']
})
export class ListTrackingVolunterSeedsComponent implements OnChanges {
  @Input() volunterId: string;
  loadingtable = true;
  data: Table;
  constructor(private trackingService: TrackingService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.getTrackingVolunters();
  }
  getTrackingVolunters(): void{
    this.loadingtable = true;
    this.trackingService.listTrackingSeeds(this.volunterId).subscribe(
      (data) => {
        this.data = data;
        this.loadingtable = false;
      }
    );
  }

  actionOutput(evento){

  }
}
