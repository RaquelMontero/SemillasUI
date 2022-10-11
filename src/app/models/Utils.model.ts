export interface ComboElement{
  value: string;
  selected: boolean;
  name: string;
}

export interface ComboResponse{
  data: ComboElement[];
}
