import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-mensajeria-filtro',
  templateUrl: './mensajeria-filtro.component.html',
  styleUrls: ['./mensajeria-filtro.component.css']
})
export class MensajeriaFiltroComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/events/texto-new-year/src/app/feature/helpdesk/mensaje/mensajeria-filtro/mensajeria-filtro.component.html");
  }


}
