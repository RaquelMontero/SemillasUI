import { Component } from '@angular/core';

@Component({
  selector: 'sml-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'semillasui';
  events: string[] = [];
  opened: boolean;
}
