import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions} from 'chart.js';
import { Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [76, 72, 78, 75, 17, 75], label: 'Crude Oil prices'},
    { data: [85, 75, 82, 90, 75, 70], label: 'Crude WTE Oil prices'}
  ];

  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
    },
    annotation: {
    },
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'Black',
      backgroundColor: 'rgb(176, 196, 222, .5)'
    }
  ];

  public lineChartLegend = true;
  public lineChartPlugins = [];
  public lineChartType = 'line';

  constructor() { }

  ngOnInit(): void {
  }

  shuffeData(): any {
    this.lineChartData = [
      { data: [Math.random() * (100 - 0) + 0,
        Math.random() * (100 - 0) + 0,
        Math.random() * (100 - 0) + 0,
        Math.random() * (100 - 0) + 0,
        Math.random() * (100 - 0) + 0,
        Math.random() * (100 - 0) + 0], label: 'Crude Oil prices'},
      { data: [Math.random() * (100 - 0) + 0,
        Math.random() * (100 - 0) + 0,
        Math.random() * (100 - 0) + 0,
        Math.random() * (100 - 0) + 0,
        Math.random() * (100 - 0) + 0,
        Math.random() * (100 - 0) + 0], label: 'Crude WTE Oil prices'}
    ];
  }
}
