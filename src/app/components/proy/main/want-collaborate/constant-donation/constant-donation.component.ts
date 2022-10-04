import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-constant-donation',
  templateUrl: './constant-donation.component.html',
  styleUrls: ['./constant-donation.component.scss']
})
export class ConstantDonationComponent implements OnInit {
  @Output() emitter: EventEmitter<{tabAction}> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  next(): void {
    this.emitter.emit({tabAction: {number: 1}}) ;
  }
}
