import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-falcon-totalsales',
  templateUrl: './falcon-totalsales.component.html',
  styleUrls: ['./falcon-totalsales.component.css']
})
export class FalconTotalsalesComponent implements OnInit {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'jan12',
      'jan15',
      'jan18',
      'jan14',
      'jan11',
      'jan15'
    ],
    datasets: [
      {
        label: 'jan',
        data: [ 1, 7, 3, 7,3,6,11,12,13 ],
        fill: true,
        tension: 0,
        borderColor: 'rgb(37, 49, 109)',
        backgroundColor: 'rgba(191, 219, 254, 0.3)'
      }
    ]

  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          
          display: true
        },
        grid: {
          drawTicks: false,
          display: true
        }
      },
      y1: {
        display: false,
        position: 'right',
      },
      x: {
        ticks: {
          display: true //this will remove only the label
        },
        grid: {
          drawTicks: true,
          display: false
        }
      }
    },
  };
  public lineChartLegend = false;
  constructor() { }

  ngOnInit(): void {
  }

}
