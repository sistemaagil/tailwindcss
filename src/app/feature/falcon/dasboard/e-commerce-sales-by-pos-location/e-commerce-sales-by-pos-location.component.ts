import {  OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-e-commerce-sales-by-pos-location',
  templateUrl: './e-commerce-sales-by-pos-location.component.html',
  styleUrls: ['./e-commerce-sales-by-pos-location.component.css']
})
export class ECommerceSalesByPosLocationComponent implements OnInit {

  title = 'ng2-charts-demo';

  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: false,
  };
  public radarChartLabels: string[] = ['Marketing', 'Sales', 'Dev', 'Support', 'Tech', 'Admin'];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [65, 59, 90, 81, 56, 55], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27], label: 'Series B' }
  ];

  selectedMenu: number = 0;
  constructor(private codeService: CodeService) { }

  ngOnInit(): void {

    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/falcon/dasboard/e-commerce-sales-by-pos-location/e-commerce-sales-by-pos-location.component.html");
  }

  setActive(index: number){
    console.log(index);
    this.selectedMenu = index;
  }

}

