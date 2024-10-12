import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-head-home',
  templateUrl: './head-home.component.html',
  styleUrls: ['./head-home.component.css']
})
export class HeadHomeComponent {


  public chartData = {
    labels: ['JavaScript', 'Angular', 'HTML', 'CSS'],
    datasets: [{
      data: [171, 100, 80, 50],
      backgroundColor: ['#821131', '#C7253E', '#E85C0D', '#FABC3F'],
      hoverBackgroundColor: ['#811131', '#C6253E', '#E55C0D', '#FbBC3F']
    }]
  };
  public ChartData = {
    labels: ['JavaScript', 'Angular', 'HTML', 'CSS'],
    datasets: [{
      data: [171, 100, 80, 50],
      backgroundColor: ['#4379F2', '#FFEB00', '#6EC207', '#117554'],
      hoverBackgroundColor: ['#4379F2', '#FFEB00', '#6EC207', '#117554']
    }]
  };

  public Data = {
    labels: ['JavaScript', 'Angular', 'HTML', 'CSS'],
    datasets: [{
      data: [171, 100, 80, 50],
      backgroundColor: ['#36BA98', '#E9C46A', '#F4A261', '#E76F51'],
      hoverBackgroundColor: ['#36BA98', '#E9C46A', '#F4A261', '#E76F51']
    }]
  };

  public data = {
    labels: ['JavaScript', 'Angular', 'HTML', 'CSS'],
    datasets: [{
      data: [171, 100, 80, 50],
      backgroundColor: ['#FF0080', '#FF5580', '#FFAA80', '#FFFF80'],
      hoverBackgroundColor: ['#FF0080', '#FF5580', '#FFAA80', '#FFFF80']
    }]
  };

  public chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
    cutout: '70%',
  };

  public chartPlugins = [];


  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(186, 85, 211, 0.785)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;
}
