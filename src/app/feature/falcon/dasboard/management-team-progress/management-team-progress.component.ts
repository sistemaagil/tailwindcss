import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-management-team-progress',
  templateUrl: './management-team-progress.component.html',
})
export class ManagementTeamProgressComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/falcon/Good-afternon/src/app/feature/falcon/dasboard/management-team-progress/management-team-progress.component.html");
  }

}
