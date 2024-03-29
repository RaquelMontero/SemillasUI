import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {VolunterService} from '../../../core/services/volunter.service';
import {UntypedFormBuilder, FormGroup, Validators} from '@angular/forms';
import {Role, Volunter} from '../../../core/models/volunter.model';
import {DomainhelperService} from '../../../core/services/domainhelper.service';
import {MessageSnackBarComponent} from '../../../shared/message-snack-bar/message-snack-bar.component';
import {MatSnackBar} from '@angular/material/snack-bar';

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
    userId: [null],
    name: ['', Validators.required],
    username: [null],
    password: [null],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    dni: ['', Validators.required],
    birthdate: ['', Validators.required],
    roles: null
  });
  hide = true;
  roles: Role[] = [];
  allRoles: Role[] = [];
  volunter: Volunter = null;
  title: string;
  filteredRoles: Role[] = [];

  constructor(public dialogRef: MatDialogRef<VolunterDialogComponent>,
              private volunterService: VolunterService,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private fb: UntypedFormBuilder,
              private matSnackBar: MatSnackBar,
              private domainhelperService: DomainhelperService
  ) { }

  ngOnInit(): void {
    this.getRoles();
    if (this.data.edit){
      this.getVolunter();
    }
    this.getTitle();
  }
  getVolunter(): void{
    this.volunterService.getvolunter(this.data.volunterId)
      .subscribe((response) => {
      this.volunter = response;
      this.volunterform.patchValue({
        userId: this.volunter.userId,
        name: this.volunter.name,
        lastname: this.volunter.lastname,
        email: this.volunter.email,
        phone: this.volunter.phone ? this.volunter.phone : '',
        dni: this.volunter.dni ? this.volunter.dni : '',
        birthdate: new Date(this.volunter.birthdate)
      });
      this.roles = this.volunter.roles;
      this.filterRoles();
    });
  }
  close(): void {
    this.dialogRef.close();
  }
  getTitle(): void{
    this.title = this.data.edit ? 'EDITAR RESPONSABLE' : 'REGISTRAR RESPONSABLE';
  }

  onSubmit(): void{
   if ( !this.data.edit ) {
     const data = {
       user: this.volunterform.value,
       entry_date: new Date(),
       roles: this.roles,
       username: this.volunterform.get('username').value,
       password: this.volunterform.get('password').value
     };
     this.volunterService.addvolunter(data)
       .subscribe(( data ) => {
         this.showMessage(data);
         this.dialogRef.close('success');
       }, (error) => {
         this.showMessage(error.error);
         //this.dialogRef.close();
         console.log('error', this.volunterform.value);
       });
   }else{
     const data = {
       volunterId: this.volunter.volunterId,
       user: this.volunterform.value,
       roles: this.roles,
       username: this.volunterform.get('username').value,
       password: this.volunterform.get('password').value
     };
     this.volunterService.updatevolunter(data)
       .subscribe(( data ) => {
         this.showMessage(data);
         this.dialogRef.close('success');
       }, (error) => {
         this.showMessage(error.error);
       });
   }
  }
  getErrorMessage(): any {
    if (this.volunterform.get('name').hasError('required')) {
      return 'Debes Ingresar el nombre';
    }
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
  get confirmButton(): string{
    return this.data.edit ? 'GUARDAR EDICIÓN' : 'GUARDAR RESPONSABLE';
  }
  getRoles(): void{
    this.domainhelperService.getAllRoles()
      .subscribe((value) => {
        this.allRoles = value;
        this.filteredRoles = value;
      });
  }
  remove(role): void{
    this.roles = this.roles.filter(r => r.roleId !== role.roleId);
    this.filteredRoles.push(role);
    console.log('r', role, this.roles);
  }

  selected(event): void {
    this.roles.push(event.option.value);
    const roleId = event.option.value.roleId;
    this.filteredRoles = this.filteredRoles.filter(r => r.roleId !== roleId);
  }
  filterRoles(): void{
    this.roles.map((role) => {
      this.filteredRoles = this.filteredRoles.filter(r => r.roleId !== role.roleId);
    });
  }

  showMessage(data: any): void{
    console.log('errormessage', data);
    this.matSnackBar.openFromComponent(MessageSnackBarComponent, {
      data: { data },
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snack-style'
    });
  }

}
