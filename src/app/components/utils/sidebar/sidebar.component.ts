import { Component, Input, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Observable } from 'rxjs';

interface IMenu {
  text: string;
  icon: string;
  routerLink?: string
  children?: IMenu[]
}
/*
const menu: IMenu[] = [
  {
    text: 'Aportadores',
    icon: 'people',
    routerLink: '/customer/manage'
  },
  {
    text: 'Aportadores del día',
    icon: 'supervised_user_circle',
    routerLink: '/supplier/manage'
  },
  {
    text: 'Aspirantes',
    icon: 'inventory_2',
    children: [{
      text: 'Ver Aspirantes',
      icon: 'category',
      routerLink: '/product/category'
    },
    {
      text: 'Ver aspirantes Rechazados',
      icon: 'layers',
      routerLink: '/product/sub-category'
    }
    ]
  },
  {
    text: 'Responsables',
    icon: 'inventory_2',
    children: [{
      text: 'Registrar Responsable',
      icon: 'category',
      routerLink: '/product/category'
    },
    {
      text: 'Ver Responsables',
      icon: 'layers',
      routerLink: '/product/sub-category'
    },
    {
      text: 'Responsables Inactivos',
      icon: 'all_inbox',
      routerLink: '/product/manage'
    }
    ]
  },
  {
    text: 'Asignar Responsables',
    icon: 'supervised_user_circle',
    routerLink: '/supplier/manage'
  },
  {
    text: 'Seguimiento',
    icon: 'inventory_2',
    children: [{
      text: 'Crear Mes',
      icon: 'category',
      routerLink: '/product/category'
    },
    {
      text: 'Seguimiento diarío',
      icon: 'layers',
      routerLink: '/product/sub-category'
    }
    ]
  },
  {
    text: 'Envío Souvenirs',
    icon: 'inventory_2',
    children: [{
      text: 'Seleccionar beneficiados',
      icon: 'category',
      routerLink: '/product/category'
    },
    {
      text: 'Ver beneficiados',
      icon: 'layers',
      routerLink: '/product/sub-category'
    }
    ]
  },
  {
    text: 'Registrar Aportadores',
    icon: 'supervised_user_circle',
    routerLink: '/supplier/manage'
  },
]
*/
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
  @Input() open
  events: string[] = [];
  opened: boolean;
  menuList: IMenu[];
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  constructor() {
  }

  ngOnInit(): void {
    //this.menuList = menu
    this.menuList = content
    console.log(content)



  }
}
