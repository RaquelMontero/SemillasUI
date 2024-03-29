export class ColumnModel {
  /** List of options */
  key: string;
  order: number;
  propertyType: any;
  canSort: boolean;
  toolTip: string;

  constructor(options: Partial<ColumnModel> = {}) {
    this.key = options.key;
    this.order = options.order || 0;
    this.propertyType = options.propertyType;
    this.canSort = options.canSort || false;
    this.toolTip = options.toolTip;
  }
}
export interface TableModel {
  columns: ColumnModel[];
/*
  addColumn(column: ColumnModel): void {
    this.columns = [...this.columns, column];
  }*/
}
