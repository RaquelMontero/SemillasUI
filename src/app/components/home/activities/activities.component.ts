import { Component, OnInit } from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {UntypedFormBuilder, FormControl} from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  public Editor = ClassicEditor;
  previousLen = null;
  form = this.fb.group({
    htmlContent: [],
    currentLenguage: [null]
  });
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };

constructor(private fb: UntypedFormBuilder,
            private translate: TranslateService) { }

  ngOnInit(): void {
    this.onChangeCurrentLen();
  }

  onReady(evento){

  }
  htmlout(evento){
    console.log('htmlout', evento);
  }

  setCurrentLen(len: string){
    this.form.get('currentLenguage').setValue(len);
    return len;
  }

  onChangeCurrentLen(){
    this.form.get('currentLenguage').valueChanges.subscribe(
      (len) => {
        if (this.previousLen != len){
          this.previousLen=len;
          console.log('len change to', len);
        }
      }
    )
  }
}
