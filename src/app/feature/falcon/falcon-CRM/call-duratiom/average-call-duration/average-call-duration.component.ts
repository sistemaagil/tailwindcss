import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { CodeService } from 'src/app/feature/code.service';


@Component({
  selector: 'app-average-call-duration',
  templateUrl: './average-call-duration.component.html',
  styleUrls: ['./average-call-duration.component.css']
})
export class AverageCallDurationComponent implements OnInit {
  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      
    ],
    datasets: [
      {
        data: [ 20, 40, 20, 110, 80, 150, 120, 200 ],
        label: 'Series A',
        fill: true,
        tension: 0,
        borderColor: 'rgb(294 96 18)',
        backgroundColor: 'rgba(294, 196, 166, 0.2)',
        pointRadius: 0,
        
        
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    scales: {
      y: {
        ticks: {
          display: false //this will remove only the label
        },
        grid: {
          drawTicks: false,
          display: false
        }
      },
      x: {
        ticks: {
          display: false //this will remove only the label
        },
        grid: {
          drawTicks: false,
          display: false
        }
      }
    }
    
  };
  public lineChartLegend = false;
  
  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/falcon/CRM/call-duration/src/app/feature/falcon/falcon-CRM/call-duratiom/average-call-duration/average-call-duration.component.html");
  }

}
