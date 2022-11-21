import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import {Seed} from '../../../core/models/Seed.model';
import {ApplicantService} from '../../../core/services/applicant.service';


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
    contributionStartDate: [new Date()],
    contributionEndDate: [null],
    processed_date: [null, Validators.required],
    process_reason: [null, [Validators.required]],
    processVolunterId: [null, Validators.required],
    state: [null, Validators.required],
    contributionType: [null]
  });
  startDate = new Date();
  endDate = new Date();
  seed: any;
  loadingSeed = true;
  processVolunterId = 1;
  constructor(public dialogRef: MatDialogRef<ModalProcessSeedComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private fb: UntypedFormBuilder,
              private applicantService: ApplicantService) { }

  ngOnInit(): void {
    this.getSeedById();
    this.endDate.setFullYear(this.startDate.getFullYear() + 1);
    this.contributor.patchValue({
      contributor_id: this.data.contributorId,
      processed_date: new Date(),
      processVolunterId: 1,
      state: this.data.isReject ? 0 : 1,
      contributionStartDate: new Date(),
      contributionEndDate: this.endDate,
    });
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
          state: this.data.isReject ? 2 : 1,
          contributionType: this.seed.contribution_config?.contribution_key
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
    return this.contributor.get('process_reason');
  }

  getErrorMessage(): string{
    if (this.contributor.get('process_reason').hasError('required')){
      return 'Debe ingresar una razón para procesar la persona';
    }
  }

  onSubmit(): void{
    const processSeed = this.contributor.value;
    processSeed.state = this.data.isReject ? 2 : 1;
    this.applicantService.processSeed(processSeed)
      .subscribe((data) => {
        this.dialogRef.close('processed');
      }, ( error ) => {
        this.dialogRef.close();
      });
  }
}
