import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-dasboard-crm-forecast',
  templateUrl: './falcon-dasboard-crm-forecast.component.html',
  styleUrls: ['./falcon-dasboard-crm-forecast.component.css']
})
export class FalconDasboardCrmForecastComponent implements OnInit {

  constructor(private codeService: CodeService) { }


  ngOnInit(): void {     this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/develop/src/app/feature/falcon/dashboard/falcon-dasboard-crm-forecast/falcon-dasboard-crm-forecast.component.html");

  }

}
