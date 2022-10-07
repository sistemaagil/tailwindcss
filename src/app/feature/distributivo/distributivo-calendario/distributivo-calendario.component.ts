import { Component, OnInit } from '@angular/core';
import { CodeService } from '../../code.service';

@Component({
  selector: 'app-distributivo-calendario',
  templateUrl: './distributivo-calendario.component.html',
  styleUrls: ['./distributivo-calendario.component.css']
})
export class DistributivoCalendarioComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/events/texto-new-year/src/app/feature/distributivo/distributivo-calendario/distributivo-calendario.component.html");
  }

}
