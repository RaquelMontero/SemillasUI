import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TrackingService} from '../../../../services/tracking.service';
import {CellContent, Table} from '../../../../models/Table.model.';
import {MessageSnackBarComponent} from '../../../libs/message-snack-bar/message-snack-bar.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AsignSeedToVolunterComponent} from '../../asign-seed-to-volunter/asign-seed-to-volunter.component';
import {MatDialog} from '@angular/material/dialog';
import {VolunterService} from '../../../../services/volunter.service';
import {Volunter} from '../../../../models/volunter.model';
export interface SelectSeed{
  seedId: string;
  trackingAssignmentId: string;
  contributionConfigId: string;
}
@Component({
  selector: 'app-list-tracking-volunter-seeds',
  templateUrl: './list-tracking-volunter-seeds.component.html',
  styleUrls: ['./list-tracking-volunter-seeds.component.scss']
})
export class ListTrackingVolunterSeedsComponent implements OnChanges {
  @Output() emitter: EventEmitter<{ tabAction }> = new EventEmitter();
  @Output() selectedSeed: EventEmitter<SelectSeed> = new EventEmitter();
  @Input() volunterId: string;
  loadingtable = true;
  data: Table;
  index = 0;

  volunteer: Volunter;
  loadingVolunteer = true;
  constructor(private trackingService: TrackingService,
              private dialog: MatDialog,
              private volunteerService: VolunterService,
              private matSnackBar: MatSnackBar) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getVolunteerInfo();
    this.getTrackingVolunters();
  }
  getTrackingVolunters(): void{
    this.loadingtable = true;
    this.trackingService.listTrackingSeeds(this.volunterId).subscribe(
      (data) => {
        this.data = data;
        this.loadingtable = false;
      }, (error) => {
        this.showMessage(error.error);
      });
  }

  actionOutput(evento: CellContent): void{
    console.log('event', evento);
    if (evento.clickedAction === 'Donations'){
      const out: SelectSeed = {
        seedId: evento.params[0].paramContent,
        trackingAssignmentId: evento.params[1].paramContent,
        contributionConfigId: evento.params[2].paramContent
      };
      this.selectedSeed.emit(out);
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

  showMessage(data: any): void{
    console.log('errormessage', data);
    this.matSnackBar.openFromComponent(MessageSnackBarComponent, {
      data: { data },
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snack-style'
    });
  }

  openAssinDialog(): void{
    const dialogConfig =  this.dialog.open(AsignSeedToVolunterComponent, {
      disableClose: false,
      panelClass: 'icon-outside',
      autoFocus: true,
      width: '800px',
      data: {
        volunterId: this.volunterId,
        //isReject: false
      }
    });
    dialogConfig.afterClosed().subscribe(result => {
      if (result){
        this.getTrackingVolunters();
      }
    });
  }

  getVolunteerInfo(){
    this.volunteerService.getvolunter(this.volunterId)
      .subscribe((data) =>{
        this.volunteer = data;
        this.loadingVolunteer = false;
      },(error => {
        this.loadingVolunteer = false;
      }))
  }
}
