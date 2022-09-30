import {Component, Input, OnInit} from '@angular/core';
import {Sort, SortDirection} from '@angular/material/sort';
import {ColumnModel, TableModel} from '../../../models/column.model';
import {cloneDeep, orderBy, sortBy} from 'lodash';
import {tableSymbol} from '../../../models/decorator/column';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
  @Input() instance: any;
  @Input() inputData: any;
  data = [];
  originalData: any[] = [];
  tableModel: TableModel;
  columns: ColumnModel[];
  displayedColumns: string[];
  constructor() { }
  ngOnInit(): void {
    if (this.inputData && this.inputData.length > 0) {
      this.data = cloneDeep(this.inputData);
      console.log('sdasdas', this.data[0]);
      // this.tableModel = this.data[0][tableSymbol]
      this.parseFormat();
      this.buildColumns();
      if (!this.originalData.length) {
        // Keep original order of data
        this.originalData = cloneDeep(this.data);
      }
    }
  }

  parseFormat(): void{
    this.tableModel = { columns:
        [ { key: 'maker', order: 0, propertyType: 'String', canSort: false },
          { key: 'model', order: 1, propertyType: 'String', canSort: true },
          { key: 'year', order: 0, propertyType: 'Number', canSort: true } ] };
  }
  /*
  { "columns":
  [ { "key": "maker", "order": 0, "propertyType": "String", "canSort": false },
   { "key": "model", "order": 1, "propertyType": "String", "canSort": true },
    { "key": "year", "order": 0, "propertyType": "Number", "canSort": true } ] }
   */
  sortData(params: Sort): void {
    const direction: SortDirection = params.direction;
    this.data = direction
      ? orderBy(this.data, [params.active], [direction])
      : this.originalData;
  }

  private buildColumns(): void {
    this.columns = this.tableModel.columns;
    this.sortColumns();
    this.displayedColumns = this.columns.map(col => col.key);
  }

  private sortColumns(): void {
    this.columns = sortBy(this.columns, ['order']);
  }
}
