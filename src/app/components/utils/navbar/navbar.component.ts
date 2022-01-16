import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'sml-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() inputSideNav: MatSidenav
  showFiller = false;
  events: string[] = [];
  opened: boolean;
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
