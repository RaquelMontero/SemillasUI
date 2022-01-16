import { Component, Input, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}
const TREE_DATA: FoodNode[] = [

  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() open
  events: string[] = [];
  opened: boolean;
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  constructor() {
    this.dataSource.data = TREE_DATA;

  }
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;








  ngOnInit(): void {
  }

}
