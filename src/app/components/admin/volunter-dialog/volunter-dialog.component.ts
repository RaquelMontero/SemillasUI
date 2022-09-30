import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {VolunterService} from '../../../services/volunter.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Volunter} from '../../../models/volunter.model';

export interface DialogData {
  volunterId: string;
  edit: boolean;
}

@Component({
  selector: 'app-volunter-dialog',
  templateUrl: './volunter-dialog.component.html',
  styleUrls: ['./volunter-dialog.component.scss']
})
export class VolunterDialogComponent implements OnInit {
  volunterform = this.fb.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    dni: ['', Validators.required],
    birthdate: ['', Validators.required],

  });

  volunter: Volunter = null;
  title: string;
  constructor(public dialogRef: MatDialogRef<VolunterDialogComponent>,
              private volunterService: VolunterService,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    if (this.data.edit){
      this.getVolunter();
    }
    this.getTitle();
  }
  getVolunter(): void{
    this.volunterService.getvolunter(this.data.volunterId).pipe()
      .subscribe((response) => {
      this.volunter = response;
      console.log('voluner', this.volunter);
      this.volunterform.patchValue({
        name: this.volunter.name,
        lastname: this.volunter.lastname,
        email: this.volunter.email,
        phone: this.volunter.phone ? this.volunter.phone : '',
        dni: this.volunter.dni ? this.volunter.dni : '',
        birthdate: new Date(this.volunter.birthdate)
      });
      console.log( ' volunterform ', this.volunterform.value);
    });
    console.log('data', this.data);
  }
  close(): void {
    this.dialogRef.close();
  }
  getTitle(): void{
    this.title = this.data.edit ? 'EDITAR VOLUNTARIO' : 'REGISTRAR VOLUNTARIO';
  }

  onSubmit(): void{
   if ( !this.data.edit ) {
     const data = {
       person: this.volunterform.value,
       entry_date: new Date()
     };
     this.volunterService.addvolunter(data)
       .subscribe((data) => {
         console.log('sucess', this.volunterform.value);
       }, (error) => {
         console.log('error', this.volunterform.value);
       });
   }
  }
  getErrorMessage(): any {
    if (this.volunterform.get('name').hasError('required')) {
      return 'Debes Ingresar el nombre';
    }
    // return this.volunterform.get('name').hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessageLastname(): any {
    if (this.volunterform.get('lastname').hasError('required')){
      return 'Debes Ingresar el apellido';
    }
  }
  getErrorMessageEmail(): any {
    if (this.volunterform.get('email').hasError('required')){
      return 'Debes Ingresar el Correo';
    }
    return this.email.hasError('email') ? 'Debes Ingresar un Correo valido' : '';
    /*if (this.volunterform.get('email').hasError('email')){
      return 'Debes Ingresar un Correo valido';
    }*/
  }

  getErrorMessagePhone(): any {
    if (this.volunterform.get('phone').hasError('required')){
      return 'Debes Ingresar un Celular';
    }
  }
  getErrorMessageDNI(): any {
    if (this.volunterform.get('dni').hasError('required')){
      return 'Debes ingresar el Carnet de Identidad';
    }
  }
    get name(): any {
    return this.volunterform.get('name');
  }
  get lastname(): any {
    return this.volunterform.get('lastname');
  }
  get email(): any {
    return this.volunterform.get('email');
  }
  get phone(): any {
    return this.volunterform.get('phone');
  }
  get dni(): any {
    return this.volunterform.get('dni');
  }
}
