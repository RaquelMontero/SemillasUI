import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-donations-types',
  templateUrl: './donations-types.component.html',
  styleUrls: ['./donations-types.component.scss']
})
export class DonationsTypesComponent implements OnInit {
  @Output() emitter: EventEmitter<{tabAction}> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  next(): void {
    this.emitter.emit({tabAction: {number: 0}}) ;
  }
  goDetails(donationType: string): void {
    this.emitter.emit({tabAction: {number: 2, action: donationType}}) ;
  }
}
