import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [['Angular'], ['HTML/CSS'], 'typeScript', 'javaScript', 'bootStrap/SASS'];
  public pieChartDatasets = [{
    data: [300, 500, 100, 400, 200]
  }];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
