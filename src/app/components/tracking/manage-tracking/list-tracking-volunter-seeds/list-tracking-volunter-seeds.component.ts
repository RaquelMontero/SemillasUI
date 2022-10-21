import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TrackingService} from '../../../../services/tracking.service';
import {CellContent, Table} from '../../../../models/Table.model.';

@Component({
  selector: 'app-list-tracking-volunter-seeds',
  templateUrl: './list-tracking-volunter-seeds.component.html',
  styleUrls: ['./list-tracking-volunter-seeds.component.scss']
})
export class ListTrackingVolunterSeedsComponent implements OnChanges {
  @Output() emitter: EventEmitter<{ tabAction }> = new EventEmitter();
  @Output() selectedSeed: EventEmitter<{ seedId }> = new EventEmitter();
  @Input() volunterId: string;
  loadingtable = true;
  data: Table;
  index = 0;
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

  actionOutput(evento: CellContent): void{
    console.log('event', evento);
    if (evento.clickedAction === 'Donations'){
      this.selectedSeed.emit({seedId: evento.params[0].paramContent})
      // this.donations();
    }
  }

  back(): void{
    this.emitter.emit({tabAction: {number: 0}}) ;
  }

  donations(): void{
    this.index = 1;
  }
  onTabChanged(evento){
    console.log('event', evento);

  }
}
