import {  OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

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

  constructor() { }

  ngOnInit(): void {
  }

}
