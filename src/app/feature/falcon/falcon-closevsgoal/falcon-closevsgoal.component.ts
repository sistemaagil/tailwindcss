import { getLocaleNumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-falcon-closevsgoal',
  templateUrl: './falcon-closevsgoal.component.html',
  styleUrls: ['./falcon-closevsgoal.component.css']
})
export class FalconClosevsgoalComponent implements OnInit {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Aug18',
      'Aug24',
      'Aug30',
      'Sep14',
      'Sep11',
      'Sep15',
      'Sep16',
      'Sep17',
      'Sep18'
    ],
    datasets: [
      {
        label: 'closed amount',
        data: [ 0, 5000, 18000, 40000,58000,65000,90000,110000,140000 ],
        fill: false,
        tension: 0,
        borderColor: 'rgb(37, 49, 109)',
      },
      {
        label: 'revenue goal',
        data:[0,10000,24000,35000,45000,53000,57000,68000,79000],
        fill:false,
        tension: 0,
        borderColor:'rgb(255, 127, 63)',

      },
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
  public lineChartLegend = true;
  constructor() { }

  ngOnInit(): void {
  }

}
