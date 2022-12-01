import {Component, OnInit} from '@angular/core';
import {Table} from '../../../core/models/Table.model.';
import {Router} from '@angular/router';
import {VolunterService} from '../../../core/services/volunter.service';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NewActivityDialogComponent} from '../new-activity-dialog/new-activity-dialog.component';

@Component({
  selector: 'app-manage-activities',
  templateUrl: './manage-activities.component.html',
  styleUrls: ['./manage-activities.component.scss']
})
export class ManageActivitiesComponent implements OnInit{
  volunteers: Table;
  loadingVolunteers = true;
  lastStatus = '';
  activities: any[] = [];
  val = this.formBuilder.group({
    state: [null]
  });
  constructor(private router: Router,
              private voluntersService: VolunterService,
              private dialog: MatDialog,
              private formBuilder: FormBuilder,
              private matSnackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.activities.push({
      activity: {
        title: 'act1',
        description: 'acrt descripcion',
        descriptionTranslate: 'acrt desc translate'
      }
    })
    this.activities.push({
      activity: {
        title: 'act2',
        description: '2acrt descripcion',
        descriptionTranslate: '2acrt desc translate'
      }
    })
    this.activities.push({
      activity: {
        title: '3act1',
        description: '3acrt descripcion',
        descriptionTranslate: '3acrt desc translate'
      }
    })
  }
  onAdding(): void {
    // this.voluntersService.formData = volunter;
    const dialogRef = this.dialog.open(NewActivityDialogComponent, {
      disableClose: false,
      autoFocus: true,
      panelClass: 'icon-outside',
      width: '800px',
      data: {
        volunterId: null,
        edit: false
      }
    });
    dialogRef.afterClosed().subscribe(result => {
     // if (result) { this.getActiveVolunters(this.val.get('state').value); }
    });
  }
}
