import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-donations-details',
  templateUrl: './donations-details.component.html',
  styleUrls: ['./donations-details.component.scss']
})
export class DonationsDetailsComponent implements OnInit, OnChanges {
  @Output() emitter: EventEmitter<{tabAction}> = new EventEmitter();

  @Input() donationType: string;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('donation', this.donationType);
  }

  next(): void {
    this.emitter.emit({tabAction: {number: 1}}) ;
  }
}
