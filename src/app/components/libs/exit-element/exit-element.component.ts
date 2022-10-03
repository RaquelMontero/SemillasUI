import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  title: string;
  question: string;
}

@Component({
  selector: 'app-exit-element',
  templateUrl: './exit-element.component.html',
  styleUrls: ['./exit-element.component.scss']
})

export class ExitElementComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ExitElementComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  onSure(): void{
    this.dialogRef.close('afirmative');
  }
  close(): void{
    this.dialogRef.close();
  }
}
