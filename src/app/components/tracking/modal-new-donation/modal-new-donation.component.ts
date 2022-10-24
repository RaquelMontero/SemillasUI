import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ContributionConfigService} from '../../../services/contribution-config.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  id: string;
  tracking_assignment_id: string;
  contribution_config_id: string;
  seedId: string;
  isUpdate: boolean;
}
@Component({
  selector: 'app-modal-new-donation',
  templateUrl: './modal-new-donation.component.html',
  styleUrls: ['./modal-new-donation.component.scss']
})
export class ModalNewDonationComponent implements OnInit {
  contributionConfig: any;
  donation = this.fb.group({
    contribution_record_id: null,
    tracking_assignment_id: [null, Validators.required],
    contribution_config_id: [null, Validators.required],
    contributor_id: [null, Validators.required],
    payment_date: [null, Validators.required],
    expected_payment_date: [null, Validators.required],
    paymentMethod: [null, Validators.required],
    contribution_ammount  : [null, Validators.required],
    receipt_number: [null, Validators.required],
    receipt_code: [null, Validators.required],
    extra_income_ammount: [null, Validators.required],
    contribution_obtained: [null, Validators.required],
    sent_payment_proof: [null, Validators.required],
    extraExpense: [null, Validators.required],
    volunter: [null, Validators.required],

  });
  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private contributionconfigservice: ContributionConfigService) { }

  ngOnInit(): void {
    this.getContributionConfigById();
  }

  getContributionConfigById(): void{
    this.contributionconfigservice.getContributionConfigById(
      this.data.contribution_config_id
    ).subscribe((data) => {
      this.contributionConfig = data;
      console.log('getContributionConfigById', data );
    });
  }
}
