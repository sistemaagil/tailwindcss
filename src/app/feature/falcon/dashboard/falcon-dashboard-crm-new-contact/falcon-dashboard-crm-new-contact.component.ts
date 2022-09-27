import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-falcon-dashboard-crm-new-contact',
  templateUrl: './falcon-dashboard-crm-new-contact.component.html',
  styleUrls: ['./falcon-dashboard-crm-new-contact.component.css']
})
export class FalconDashboardCRMNewContactComponent implements OnInit {
  title = 'ng2-charts-demo';
  //GRAFICO NUMERO 1 NEW CONTACT
    public lineChartData: ChartConfiguration<'line'>['data'] = {
      labels:[
        '1',
        '2',
        '3',
        '4',
        '5',
        '',
        ''
      ],
      datasets: [
        {
          data: [ 300, 325, 260, 305, 290,220, 290, 600],
          fill: true,
          tension: 0.1,
          borderColor: 'rgb(37 99 235)',
          backgroundColor: 'rgba(219 234 254)'
        }
      ]
    };
    public lineChartOptions: ChartOptions<'line'> = {
      responsive: false,
      scales: {
        y: {
          ticks : {
            display : false //this remove only the lavel
          },
          grid: {
            display: false
          }
        },
        x: {
          ticks : {
            display : false //this remove only the lavel
          },
          grid: {
            display: false
          }
        },
      }
    };
    public lineChartLegend = false;

    // GRAFICO NUMERO 2 NEW USERS
    public lineChartData1: ChartConfiguration<'line'>['data'] = {
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '',
        ''
      ],
      datasets: [
        {
          data: [ 300, 315, 310, 335, 315, 330, 328,200 ],
          fill: true,
          tension: 0.1,
          borderColor: 'rgb(103 232 249)',
          backgroundColor: 'rgba(224 242 254)'
        }
      ]
    };
    public lineChartOptions1: ChartOptions<'line'> = {
      responsive: false,
      scales: {
        y: {
          ticks : {
            display : false //this remove only the lavel
          },
          grid: {
            display: false
          }
        },
        x: {
          ticks : {
            display : false //this remove only the lavel
          },
          grid: {
            display: false
          }
        },
      }
    };

    public lineChartLegend1  = false;

  // GRAFICO NUMERO 3 NEW LEADS
    public lineChartData3: ChartConfiguration<'line'>['data'] = {
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '',
        ''
      ],
      datasets: [
        {
          data: [ 393, 385, 390, 380, 385, 370, 375, 360,340 ],
          fill: true,
          tension: 0.1,
          borderColor: 'rgb(16 185 129)',
          backgroundColor: 'rgba(220 252 231)'
        }
      ]
    };
    public lineChartOptions3: ChartOptions<'line'> = {
      responsive: false,
      scales: {
        y: {
          ticks : {
            display : false //this remove only the lavel
          },
          grid: {
            display: false
          }
        },
        x: {
          ticks : {
            display : false //this remove only the lavel
          },
          grid: {
            display: false
          }
        },
      }
    };
    public lineChartLegend3  = false;

  constructor() { }

  ngOnInit(): void {
  }

}
