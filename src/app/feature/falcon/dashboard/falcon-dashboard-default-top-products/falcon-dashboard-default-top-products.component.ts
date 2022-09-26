import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-dashboard-default-top-products',
  templateUrl: './falcon-dashboard-default-top-products.component.html',
  styleUrls: ['./falcon-dashboard-default-top-products.component.css']
})
export class FalconDashboardDefaultTOPPRODUCTSComponent implements OnInit {

  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Boots4', 'Reing Pro', 'Slick', 'Falcon', 'Sparrow', 'Hideaway', 'Freya' ],
    datasets: [
      { data: [ 43, 83, 86, 72, 80, 50,80 ], label: '2019 ' ,backgroundColor: 'rgba(59 130 246)'},
      { data: [ 85, 73, 62, 53, 50, 70, 90 ], label: '2018 ' , backgroundColor: 'rgba(203 213 225)'},


    ]
  };

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/develop/src/app/feature/falcon/dashboard/falcon-dashboard-default-top-products/falcon-dashboard-default-top-products.component.html")
  }

}


