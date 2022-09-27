import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-returning-customer-rate',
  templateUrl: './returning-customer-rate.component.html',
  styleUrls: ['./returning-customer-rate.component.css']
})
export class ReturningCustomerRateComponent implements OnInit {

  title = 'ng2-charts-demo';

  public ChartData: ChartConfiguration['data'] = {
    labels: [
      'Mar 01',
      '7',
      '13',
      '19',
      '25',
      '31',
    ],
    
    datasets: [
      {
        data: [ 100, 70, 50, 120, 100,130,140,90,100,40],
        label: 'Returning',
        fill: true,
        tension: 0,
        borderColor: 'rgb(249 115 22)',
        backgroundColor: 'transparent',
        type: 'line',
        pointRadius: 0,
      },{
        data: [ 80, 50, 60, 40, 120,100,130,60,80,50],
        label: 'New',
        borderColor: 'rgb(37 99 235)',
        backgroundColor: 'transparent',
        type: 'line',
         pointRadius: 0,
      }
    ]
    
  };
  public lineChartOptions: ChartOptions = {
    responsive: false,
  };

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/feature/e-commerce/Returning-Customer-Rate/src/app/feature/falcon/e-commerce/customer/returning-customer-rate/returning-customer-rate.component.html");
  }


}
