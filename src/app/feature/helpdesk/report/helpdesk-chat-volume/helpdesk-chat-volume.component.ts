import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';
import { ChartConfiguration, ChartOptions } from "chart.js";
@Component({
  selector: 'app-helpdesk-chat-volume',
  templateUrl: './helpdesk-chat-volume.component.html'
})
export class HelpdeskChatVolumeComponent implements OnInit {

  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre'
    ],
    datasets: [
      {
        data: [ 20, 40, 100, 120 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'rgb(37 99 235)',
        backgroundColor: 'rgba(191, 219, 254, 0.3)'
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
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/develop/src/app/feature/helpdesk/report/helpdesk-chat-volume/helpdesk-chat-volume.component.html");
  }

}
