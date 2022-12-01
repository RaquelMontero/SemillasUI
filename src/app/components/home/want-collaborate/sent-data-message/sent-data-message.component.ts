import {Component, Inject, OnInit} from '@angular/core';
import {SnackMessage} from '../../../../core/models/Message.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
interface MessageData{
  data: SnackMessage;
}
@Component({
  selector: 'app-sent-data-message',
  templateUrl: './sent-data-message.component.html',
  styleUrls: ['./sent-data-message.component.scss']
})
export class SentDataMessageComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    console.log('this.data');
  }
}
