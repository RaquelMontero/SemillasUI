import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ApplicantService} from '../../../../../services/applicant.service';

@Component({
  selector: 'app-unique-donation',
  templateUrl: './unique-donation.component.html',
  styleUrls: ['./unique-donation.component.scss']
})
export class UniqueDonationComponent implements OnInit {
  @Output() emitter: EventEmitter<{tabAction}> = new EventEmitter();

  donationForm = this.formBuilder.group({
    donationAmount: ['', Validators.required],
    paymentMethod: ['', Validators.required],
    getNews: ['', Validators.required],
    monthDay: ['', Validators.required],
    newsMethod: ['', Validators.required],
  });
  paymentMethods: [];
  constructor(private formBuilder: FormBuilder,
              private applicantService: ApplicantService) { }

  ngOnInit(): void {
    this.getPaymentMethods();
  }
  get donationAmount(): any {
    return this.donationForm.get('donationAmount');
  }
  get paymentMethod(): any {
    return this.donationForm.get('paymentMethod');
  }
  get getNews(): any {
    return this.donationForm.get('getNews');
  }
  get monthDay(): any {
    return this.donationForm.get('monthDay');
  }
  get newsMethod(): any {
    return this.donationForm.get('newsMethod');
  }
  getErrorMessage(): any {
    if (this.donationForm.get('newsMethod').hasError('required')) {
      return 'Debes Ingresar el nombre';
    }
    // return this.volunterform.get('name').hasError('email') ? 'Not a valid email' : '';
  }

  getPaymentMethods(): void{
    this.applicantService.getPaymentMethods()
      .subscribe((data) => {
        this.paymentMethods = data.data;
      });
  }
  next(): void {
    this.emitter.emit({tabAction: {number: 1}}) ;
  }
}
