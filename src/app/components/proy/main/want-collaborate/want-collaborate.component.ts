import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-want-collaborate',
  templateUrl: './want-collaborate.component.html',
  styleUrls: ['./want-collaborate.component.scss']
})
export class WantCollaborateComponent implements OnInit {
  avengers = [{ id: 1, naming: 'Captain America', city: 'US' },
    { id: 2, naming: 'Thor' , city: 'Asgard'},
    { id: 3, naming: 'Iron Man' , city: 'New York'},
    ];


  constructor() { }
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  ngOnInit(): void {
  }

}
