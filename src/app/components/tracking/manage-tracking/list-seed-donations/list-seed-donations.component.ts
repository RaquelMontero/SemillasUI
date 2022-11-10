import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TrackingService} from '../../../../services/tracking.service';
import {CellContent, Table} from '../../../../models/Table.model.';
import {MatDialog} from '@angular/material/dialog';
import {AsignSeedToVolunterComponent} from '../../asign-seed-to-volunter/asign-seed-to-volunter.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ModalNewDonationComponent} from '../../modal-new-donation/modal-new-donation.component';

@Component({
  selector: 'app-list-seed-donations',
  templateUrl: './list-seed-donations.component.html',
  styleUrls: ['./list-seed-donations.component.scss']
})
export class ListSeedDonationsComponent implements OnChanges {
  @Output() emitter: EventEmitter<{ tabAction }> = new EventEmitter();
  @Input() seedId: string;
  @Input() trackingAssignmentId: string;
  @Input() contributionConfigId: string;
  loadingtable = true;
  data: Table;
  constructor(private trackingService: TrackingService,
              private dialog: MatDialog) { }

  back(): void{
    this.emitter.emit({tabAction: {number: 1}}) ;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getDonations();
    this.getDonationsRecord();
  }

  actionOutput(evento: CellContent): void{
    console.log('event', evento);
    if (evento.clickedAction === 'Donations'){
      //this.selectedSeed.emit({seedId: evento.params[0].paramContent})
      // this.donations();
    }
  }
  onAdding(): void{}

  getDonations(): void{
    this.trackingService.getSeedsDonations(this.seedId)
      .subscribe((data) => {
        this.data = data;
        this.loadingtable = false;
      }, (error => {
        this.loadingtable = false;
      }));
  }

  newDonation(): void {
    console.log('new dialog', this.seedId );
    console.log('new trackingAssignmentId', this.trackingAssignmentId );
    console.log('new contributionConfigId', this.contributionConfigId );

    const dialogConfig =  this.dialog.open(ModalNewDonationComponent, {
      disableClose: false,
      panelClass: 'icon-outside',
      autoFocus: true,
      width: '700px',
      data: {
        seedId: this.seedId,
        tracking_assignment_id: this.trackingAssignmentId,
        contribution_config_id: this.contributionConfigId,
        isUpdate: false
      }
    });
    dialogConfig.afterClosed().subscribe(result => {
      if (result){
        this.getDonations();
      }
    });
  }
  getDonationsRecord(): void{
    this.loadingtable = true;
    this.trackingService.listSeedTrackingRecords('d')
      .subscribe((table) => {
        this.data = table;
        this.loadingtable = false;
      });
  }
  outputEvent(evento): void{}
}
