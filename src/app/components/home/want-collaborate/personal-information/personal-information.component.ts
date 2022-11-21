import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import {ApplicantService} from '../../../../core/services/applicant.service';
import {ComboElement} from '../../../../core/models/Utils.model';
import {UtilService} from '../../../../core/services/util.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  @Output() emitter: EventEmitter<{tabAction}> = new EventEmitter();
  @Output() personalInfo: EventEmitter<any> = new EventEmitter();
  countries: ComboElement[];
  applicantForm = this.formBuilder.group({
    name: [null, Validators.required],
    lastname: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    phone: [null, Validators.required],
    dni: [null, Validators.required],
    birthdate: [null, Validators.required],
    country: [null, Validators.required],
    city: [null, Validators.required],
    address: [null, Validators.required],

  });
  constructor(private formBuilder: UntypedFormBuilder,
              private applicantService: ApplicantService,
              private utilsService: UtilService) { }

  ngOnInit(): void {
    this.getCountries();
  }
  getErrorMessage(): any {
    if (this.applicantForm.get('name').hasError('required')) {
      return 'Debe ingresar el nombre';
    }
    // return this.volunterform.get('name').hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessageLastname(): any {
    if (this.applicantForm.get('lastname').hasError('required')){
      return 'Debe ingresar el apellido';
    }
  }
  getErrorMessageEmail(): any {
    if (this.applicantForm.get('email').hasError('required')){
      return 'Debe ingresar el correo';
    }
    return this.email.hasError('email') ? 'Debe ingresar un correo valido' : '';
    /*if (this.volunterform.get('email').hasError('email')){
      return 'Debes Ingresar un Correo valido';
    }*/
  }

  getErrorMessagePhone(): any {
    if (this.applicantForm.get('phone').hasError('required')){
      return 'Debe ingresar un celular';
    }
  }

  getAdreesMessage(): any {
    if (this.applicantForm.get('address').hasError('required')){
      return 'Debe ingresar una dirección';
    }
  }

  getErrorMessageDNI(): any {
    if (this.applicantForm.get('dni').hasError('required')){
      return 'Debe ingresar el carnet de identidad';
    }
  }
  get name(): any {
    return this.applicantForm.get('name');
  }
  get lastname(): any {
    return this.applicantForm.get('lastname');
  }
  get email(): any {
    return this.applicantForm.get('email');
  }
  get phone(): any {
    return this.applicantForm.get('phone');
  }
  get dni(): any {
    return this.applicantForm.get('dni');
  }
  next(): void {
    this.personalInfo.emit(this.applicantForm.value);
    this.emitter.emit({tabAction: {number: 1}}) ;
  }
  getCountries(): void{
   this.utilsService.getCountries()
     .subscribe((data) => {
       this.countries = data.data;
     });
  }
}
