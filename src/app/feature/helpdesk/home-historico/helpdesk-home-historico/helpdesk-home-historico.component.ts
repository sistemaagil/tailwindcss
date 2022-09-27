import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-helpdesk-home-historico',
  templateUrl: './helpdesk-home-historico.component.html',
  styleUrls: ['./helpdesk-home-historico.component.css']
})
export class HelpdeskHomeHistoricoComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/develop/src/app/feature/helpdesk/home-historico/helpdesk-home-historico/helpdesk-home-historico.component.html");
  }

}
