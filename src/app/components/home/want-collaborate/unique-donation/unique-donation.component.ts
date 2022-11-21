import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import {ApplicantService} from '../../../../core/services/applicant.service';
import {ComboElement} from '../../../../core/models/Utils.model';
import {UtilService} from '../../../../core/services/util.service';

@Component({
  selector: 'app-unique-donation',
  templateUrl: './unique-donation.component.html',
  styleUrls: ['./unique-donation.component.scss']
})
export class UniqueDonationComponent implements OnInit, OnChanges {
  @Output() emitter: EventEmitter<{ tabAction }> = new EventEmitter();
  @Input() personalInformation: any;
  donationForm = this.formBuilder.group({
    contribution_amount: ['', Validators.required],
    paymentMethod: ['', Validators.required],
    send_news: [true, Validators.required],
    date_contribution: ['', Validators.required],
    sendNewsType: [null],
  });
  sendingData = false;
  paymentMethods: ComboElement[] = [];
  newsTypes: ComboElement[] = [];
  contributor;
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  constructor(private formBuilder: UntypedFormBuilder,
              private applicantService: ApplicantService,
              private utilsService: UtilService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.personalInformation);
    const {country, city, address, ...user} = this.personalInformation;
    this.contributor = {
      country,
      city,
      address,
      user
    };
  }

  ngOnInit(): void {
    this.getPaymentMethods();
    this.getNewsTypes();
  }
  get donationAmount(): any {
    return this.donationForm.get('contribution_amount');
  }
  get paymentMethod(): any {
    return this.donationForm.get('paymentMethod');
  }
  get getNews(): any {
    return this.donationForm.get('send_news');
  }
  get date_contribution(): any {
    return this.donationForm.get('date_contribution');
  }
  get newsMethod(): any {
    return this.donationForm.get('sendNewsType');
  }
  getErrorMessage(): any {
    if (this.donationForm.get('paymentMethod').hasError('required')) {
      return 'Debe elegir el método de pago';
    }
  }
  getDonationAmountError(): any {
    if (this.donationForm.get('contribution_amount').hasError('required')) {
      return 'Debe ingresar el monto de aporte';
    }
  }
  getPaymentDateError(): any {
    if (this.donationForm.get('date_contribution').hasError('required')) {
      return 'Debe elegir una fecha';
    }
  }
  getPaymentMethods(): void{
    this.utilsService.getPaymentMethods()
      .subscribe((data) => {
        this.paymentMethods = data.data;
      });
  }
  getNewsTypes(): void{
    this.utilsService.getNewTypes()
      .subscribe((data) => {
        this.newsTypes = data.data;
      });
  }
  next(): void {
    this.emitter.emit({tabAction: {number: 1}}) ;
  }
  get childscount(): string{
    let amount = this.donationForm.get('contribution_amount').value;
    amount = Math.trunc(Number(amount) / 35);
    return amount + ' Niños';
  }

  get dolarsamount(): string{
    let amount = this.donationForm.get('contribution_amount').value;
    amount = Math.trunc(Number(amount) / 5);
    return amount + '$U$ ';
  }

  sentData(): void{
    this.sendingData = true;
    const payload = this.donationForm.value;
    payload.contributor = this.contributor;
    console.log('response', payload, this.personalInformation);
    this.applicantService.createUniqueApplicant(payload)
      .subscribe((response) => {
        console.log('response', response);
        this.sendingData = false;

      }, ( error ) => {
        console.log('error', error);
        this.sendingData = false;

      });
  }

  get canSendForm(): boolean{
    return this.donationForm.get('send_news').value ?
      this.donationForm.get('sendNewsType').value !== null &&
      this.donationForm.valid
      : this.donationForm.valid;
  }
}
