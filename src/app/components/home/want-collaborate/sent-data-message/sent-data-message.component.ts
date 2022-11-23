import {Component, Inject} from '@angular/core';
import {SnackMessage} from '../../../../core/models/Message.model';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
interface MessageData{
  data: SnackMessage;
}
@Component({
  selector: 'app-sent-data-message',
  templateUrl: './sent-data-message.component.html',
  styleUrls: ['./sent-data-message.component.scss']
})
export class SentDataMessageComponent {
  constructor( @Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }
}
