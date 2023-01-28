export {};

declare global {
  interface Window {
    requestAnimFrame: any;
  }
}

type TableDetails = {
  name: String;
  details: String;
}

type AreaChartData = {
  name: String;
  value: Number;
}

export interface TableInputProps { 
  data: TableDetails[];
}

export interface AreaChartInputProps { 
  data: AreaChartData[];
  title: String;
}

export interface PieChartInputProps { 
  data: any;
}