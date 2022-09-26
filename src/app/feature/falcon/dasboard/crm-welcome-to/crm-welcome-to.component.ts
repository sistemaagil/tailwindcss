import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-crm-welcome-to',
  templateUrl: './crm-welcome-to.component.html',
})
export class CrmWelcomeToComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/falcon/crm/welcome-to/src/app/feature/falcon/dashboard/crm-welcome-to/crm-welcome-to.component.html");
  }

}
