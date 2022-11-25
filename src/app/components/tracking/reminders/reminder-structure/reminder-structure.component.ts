import {Component, OnInit} from '@angular/core';
import {FormBuilder, UntypedFormBuilder} from '@angular/forms';
import {ReportServiceService} from '../../../../core/services/report-service.service';

@Component({
  selector: 'app-reminder-structure',
  templateUrl: './reminder-structure.component.html',
  styleUrls: ['./reminder-structure.component.scss']
})
export class ReminderStructureComponent implements OnInit {
  form = this.fb.group({
    htmlContent: []
  });
  constructor(private fb: FormBuilder,
              private reportService:  ReportServiceService) {
  }
  ngOnInit(): void {
    this.valueChanges();
  }


  onReady(event)
  {
    console.log('evenot', event);
  }

  valueChanges(){
    this.form.get('htmlContent').valueChanges.subscribe((data) =>{
      console.log('data', data);
    })
  }

  onSubmit(){
    const payload = {
      seedsEmails:["nabogaria@gmail.com", "raquel.montero@ucb.edu.bo"],
      emailSubject: "Prueba correos",
      emailBody: this.form.get('htmlContent').value
    }
    this.reportService.sendEmail(payload).subscribe((data)=>{
      console.log('data');
    })
  }
}
