import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, Validators} from '@angular/forms';
import {Seed} from '../../../models/Seed.model';
import {ApplicantService} from '../../../services/applicant.service';


export interface DialogData {
  contributorId: string;
  isReject: boolean;
}

@Component({
  selector: 'app-modal-process-seed',
  templateUrl: './modal-process-seed.component.html',
  styleUrls: ['./modal-process-seed.component.scss']
})
export class ModalProcessSeedComponent implements OnInit {
  contributor = this.fb.group({
    contributor_id: [null, Validators.required],
    processed_date: [null, Validators.required],
    processReason: [null, [Validators.required]],
    processVolunterId: [null, Validators.required],
    state: [null, Validators.required],
  });
  seed: Seed;
  loadingSeed = true;
  processVolunterId = 1;
  constructor(public dialogRef: MatDialogRef<ModalProcessSeedComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private fb: FormBuilder,
              private applicantService: ApplicantService) { }

  ngOnInit(): void {
  }

  getSeedById(): void{
    this.applicantService.getSeedById(this.data.contributorId)
      .subscribe((seed) => {
        this.seed = seed;
        this.loadingSeed = false;
        this.contributor.patchValue({
          contributor_id: this.data.contributorId,
          processed_date: new Date(),
          processVolunterId: this.processVolunterId,
          state: this.data.isReject ? 0 : 1
        });
      });
  }
  get title(): string{
    return this.data.isReject ? 'RECHAZAR SEMILLA' : 'ACEPTAR SEMILLA';
  }

  close(): void{
    this.dialogRef.close();
  }
  get processReason(): any{
    return this.contributor.get('processReason');
  }

  getErrorMessage(): string{
    if (this.contributor.get('processReason').hasError('required')){
      return 'Debe ingresar una razón para procesar la persona';
    }
  }

  onSubmit(): void{
    const processSeed = this.contributor.value;
    this.applicantService.processSeed(processSeed)
      .subscribe((data) => {
        this.dialogRef.close('processed');
      }, ( error ) => {
        this.dialogRef.close();
      });
  }
}
