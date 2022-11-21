import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TrackingService} from '../../../../services/tracking.service';
import {CellContent, Table} from '../../../../models/Table.model.';
import {MatDialog} from '@angular/material/dialog';
import {ModalNewDonationComponent} from '../../modal-new-donation/modal-new-donation.component';
import {ApplicantService} from '../../../../services/applicant.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
  loadingTable = true;
  data: Table;

  loadingSeed = true;
  seed: any;
  constructor(private trackingService: TrackingService,
              private seedService: ApplicantService,
              private dialog: MatDialog) { }

  back(): void{
    this.emitter.emit({tabAction: {number: 1}}) ;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getSeedInfo();
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

  newDonation(): void {
    console.log('new seedId', this.seedId );
    console.log('new trackingAssignmentId', this.trackingAssignmentId );
    console.log('new contributionConfigId', this.contributionConfigId );

    const dialogConfig =  this.dialog.open(ModalNewDonationComponent, {
      disableClose: false,
      panelClass: 'icon-outside',
      autoFocus: true,
      width: '800px',
      data: {
        seedId: this.seedId,
        tracking_assignment_id: this.trackingAssignmentId,
        contribution_config_id: this.contributionConfigId,
        isUpdate: false
      }
    });
    dialogConfig.afterClosed().subscribe(result => {
      if (result){
        this.getDonationsRecord();
      }
    });
  }
  getDonationsRecord(): void{
    this.loadingTable = true;
    this.trackingService.listSeedTrackingRecords(this.seedId)
      .subscribe((table) => {
        this.data = table;
        this.loadingTable = false;
      });
  }

  getSeedInfo(){
    this.loadingSeed = true;
    this.seedService.getSeedById(this.seedId).subscribe((data) => {
      this.seed = data;
      this.loadingSeed = false;
    }, (error => {
      this.seed = null;
      this.loadingSeed = false;
    }))
  }

  public openPDF(): void {
    const DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      const fileWidth = 208;
      const fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('contributor-record.pdf');
    });
  }
}
