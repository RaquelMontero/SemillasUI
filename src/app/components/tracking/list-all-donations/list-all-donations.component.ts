import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import {ComboElement} from '../../../core/models/Utils.model';
import {Table, TableRow} from '../../../core/models/Table.model.';
import {TrackingService} from '../../../core/services/tracking.service';
import {UtilService} from '../../../core/services/util.service';
import {ExportSheetComponent} from '../../libs/export-sheet/export-sheet.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-all-donations',
  templateUrl: './list-all-donations.component.html',
  styleUrls: ['./list-all-donations.component.scss']
})
export class ListAllDonationsComponent implements OnInit {
  filterform = this.fb.group({
    beginDate: ['', Validators.required],
    endDate: ['', Validators.required],
    contributionType: [null],
    paymentMethod: []
  });
  paymentMethods: ComboElement[] = [];
  contributionTypes: ComboElement[] = [];
  tracking: TableRow[];
  loadingTracking = true;

  loadingTable = true;
  data: Table;

  loadingSeed = true;
  seed: any;

  constructor( private fb: UntypedFormBuilder,
               private trackingService: TrackingService,
               private _bottomSheet: MatBottomSheet,
               private router: Router,
               private utilServce: UtilService) { }

  ngOnInit(): void {
    this.getPaymentMethods();
    this.getContributionTypes();
    this.getIncomeContributions();
  }
  getPaymentMethods(): void{
    this.utilServce.getPaymentMethods()
      .subscribe((data) => {
        this.paymentMethods = data.data;
        this.filterform.patchValue({
          beginDate: new Date(),
          endDate: new Date(),
          paymentMethod: this.paymentMethods[0].value
        });
        //this.filterform.get('beginDate').disable();
        //this.filterform.get('endDate').disable();
      });
  }

  getContributionTypes(): void {
    this.contributionTypes = [
      {
        value: "APORTE_UNICO",
        selected: true,
        name: "APORTE ÚNICO"
      },
      {
        value: "APORTE_CONSTANTE",
        selected: false,
        name: "APORTE CONSTANTE"
      }
    ]
  }

  getIncomeContributions(): void{
    this.loadingTable = true;
    this.trackingService.listTrackingRecords()
      .subscribe((table) => {
        this.data = table;
        this.loadingTable = false;
      });
  }

  actionOutput(event){

  }

  openBottomSheet(): void {
    const queryParams = this.filterform.value
    this._bottomSheet.open(ExportSheetComponent).afterDismissed()
      .subscribe((dats) => {
        if (dats){
            const url = this.router.serializeUrl(
              this.router.createUrlTree(
                ['/admin/tracking/export-tracking'],
                { queryParams })
            );
            window.open(url, '_blank');
        }
      });
  }
}
