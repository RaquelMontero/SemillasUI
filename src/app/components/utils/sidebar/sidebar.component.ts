import { Component, Input, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface IMenu {
  text: string;
  icon: string;
  routerLink?: string;
  children?: IMenu[];
}
interface FoodNode {
  name: string;
  children?: FoodNode[];
}
const content = require('../../../../assets/menu.json');
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() open: any;
  events: string[] = [];
  opened: boolean;
  menuList: IMenu[];
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  constructor() {
  }

  ngOnInit(): void {
    // this.menuList = menu
    this.menuList = content;
    console.log(content);
  }
}
