export interface Table{
  rows: TableRow[];
}
export interface TableRow{
  cells: Cell[];
}
export interface Cell{
  cellHeader: CellHeader;
  cellProperty: CellProperty;
  contents: CellContent[];
}

export interface CellHeader{
  key: string;
  order: number;
  propertyType: string;
  canSort: boolean;
  toolTip: string;
}
export interface CellContent{
  contentType: string;
  iconName: string;
  color: string;
  clickable: boolean;
  clickedAction: string;
  contentTooltip: string ;
  content: string;
  params: CellParam[] ;
}
export interface CellParam{
  paramName: string ;
  paramContent: string ;
}

export interface CellProperty{
  color;
  clickable: boolean;
  clickedAction: string;
  cellTooltip: string;
}
