import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import {ComboElement} from '../../../models/Utils.model';
import {UtilService} from '../../../services/util.service';
import {Table, TableRow} from '../../../models/Table.model.';
import {TrackingService} from '../../../services/tracking.service';

@Component({
  selector: 'app-list-all-tracking-seeds',
  templateUrl: './list-all-tracking-seeds.component.html',
  styleUrls: ['./list-all-tracking-seeds.component.scss']
})
export class ListAllTrackingSeedsComponent implements OnInit {
  filterform = this.fb.group({
    begindate: ['', Validators.required],
    enddate: ['', Validators.required],
    paymentMethod: []
  });
  paymentMethods: ComboElement[] = [];
  tracking: TableRow[];
  loadingTracking = true;
  constructor( private fb: UntypedFormBuilder,
               private trackingService: TrackingService,
               private utilServce: UtilService) { }

  ngOnInit(): void {
    this.getPaymentMethods();
  }

  getPaymentMethods(): void{
    this.utilServce.getPaymentMethods()
      .subscribe((data) => {
        this.paymentMethods = data.data;
        this.filterform.patchValue({
          begindate: new Date(),
          enddate: new Date(),
          paymentMethod: this.paymentMethods[0].value
        });
      });
  }
  getIncomeContributions(): void{
    this.trackingService.getIncomeContributions().subscribe(
      (data) => {
        this.tracking = data.rows;
        this.loadingTracking = false;
    }, (error) => {
        this.loadingTracking = false;
    });
  }
}
