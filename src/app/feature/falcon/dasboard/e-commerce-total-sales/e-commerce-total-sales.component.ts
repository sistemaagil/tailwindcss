import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions} from "chart.js";
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-e-commerce-total-sales',
  templateUrl: './e-commerce-total-sales.component.html',
})
export class ECommerceTotalSalesComponent implements OnInit {
  title = 'ng2-charts-demo';

  public lineChartLegend = true;
  public lineChartPlugins = [];

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [ 'Sept 6',
    'Sept 7',
    'Sept 8',
    'Sept 9',
    'Sept 10',
    'Sept 11',
    'Sept 12',
    'Sept 13',
    'Sept 14',
    'Sept 15',
    'Sept 16',
    'Sept 17', 
  ],

    datasets: [
      { data: [ 110, 30, 40, 50, 80, 70, 50, 40, 110, 90, 60, 60,0 ], 
        label: 'Last Month: $32,502.00 ' ,
        fill: false,
        borderWidth: 2,
        tension: 0,
        borderColor: 'rgb(255, 195, 232)',
        pointBorderColor: 'rgb(255, 195, 232)',
        pointBackgroundColor: 'white',
        pointBorderWidth:2,
        pointRadius:5,
        pointHoverRadius:7,
      },
      { data: [ 50, 80, 60, 80, 65, 90, 130, 90, 30, 40, 30, 70,], 
      label: 'Prev Year: $46,018.00      ' , 
      fill: true,
      backgroundColor:'rgba(208, 232, 253, 0.185)',
      borderWidth: 2,
      tension: 0,
      borderColor: 'rgb(77, 122, 248)',
      pointBorderColor: 'rgb(60, 96, 255)',
      pointBackgroundColor: 'white',
      pointBorderWidth:2,
      pointRadius:5,
      pointHoverRadius:7,
    }


    ]
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: false,
  };


  /*click*/
  activeClickActive : number = 0;
  constructor( private codeService: CodeService) {
  }

  ngOnInit() {
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/falcon/crm/welcome-to/src/app/feature/falcon/dashboard/total-sales/total-sales.component.html");
  }
  setClickClass(id :number):void{
    this.activeClickActive= id;
  }
}
