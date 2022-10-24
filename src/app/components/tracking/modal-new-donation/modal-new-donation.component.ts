import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ContributionConfigService} from '../../../services/contribution-config.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ComboElement, ComboResponse} from '../../../models/Utils.model';
import {UtilService} from '../../../services/util.service';

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
  paymentMethods: ComboElement[];
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
              private utilService: UtilService,
              private contributionconfigservice: ContributionConfigService) { }

  ngOnInit(): void {
    this.getContributionConfigById();
    this.initData();
  }

  initData(): void{
    this.getPaymentMethods();
  }

  getPaymentMethods(): void {
    this.utilService.getPaymentMethods()
      .subscribe((data) => {
        this.paymentMethods = data.data;
      });
  }
  getContributionConfigById(): void{
    this.contributionconfigservice.getContributionConfigById(
      this.data.contribution_config_id
    ).subscribe((data) => {
      this.contributionConfig = data;
      console.log('getContributionConfigById', data );
    }, (error) => {
      console.log('getContributionConfigById', error );
      this.contributionConfig = {
        contribution_config_id: 1,
        contribution_key: 'APORTE_CONSTANTE',
        contribution_id: '1',
        contribution: {
          const_contribution_id: '1',
          start_month: 'DICIEMBRE',
          paymentDate: 5,
          remainderType: 'CORREO_ELECTRONICO',
          contributionStartDate: '12/12/2022',
          contributionEndDate: '12/12/2023',
          contribution_amount: 35,
          paymentMethod: 'CODIGO_QR',
          send_news: true,
          sendNewsType: 'MENSAJE_WHATSSAP'
        }
      };
      this.donation.patchValue({
        paymentMethod: this.contributionConfig.contribution.paymentMethod
      });
    });
  }

  get donationAmount(): any {
    return this.donation.get('contribution_ammount');
  }

  getDonationAmountError(): any {
    if (this.donation.get('contribution_ammount').hasError('required')) {
      return 'Debe ingresar el monto de aporte';
    }
  }
  getPaymentDateError(): any {
    if (this.donation.get('payment_date').hasError('required')) {
      return 'Debe ingresar la fecha de aporte';
    }
  }
  getExpectedPaymentDateError(): any {
    if (this.donation.get('expected_payment_date').hasError('required')) {
      return 'Debe ingresar la fecha esperada de aporte';
    }
  }
  get childscount(): string{
    let amount = this.donation.get('contribution_ammount').value;
    amount = Math.trunc(Number(amount) / 35);
    return amount + ' Niños';
  }
}
