import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';
import {SnackMessage} from '../../../models/Message.model';

interface MessageData{
  data: SnackMessage;
}

@Component({
  selector: 'app-message-snack-bar',
  templateUrl: './message-snack-bar.component.html',
  styleUrls: ['./message-snack-bar.component.scss']
})
export class MessageSnackBarComponent implements OnInit {

  constructor(public sbRef: MatSnackBarRef<MessageSnackBarComponent>,
              @Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit(): void {
    console.log('dialog', this.data);
  }

  get title(){
    return this.data.data.status ? 'Exito' : 'error';
  }
}
