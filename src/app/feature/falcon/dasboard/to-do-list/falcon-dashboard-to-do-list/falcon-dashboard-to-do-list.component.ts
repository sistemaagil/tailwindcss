import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-dashboard-to-do-list',
  templateUrl: './falcon-dashboard-to-do-list.component.html',
  styleUrls: ['./falcon-dashboard-to-do-list.component.css']
})
export class FalconDashboardToDoListComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/feature/falcon/to-do-list/src/app/feature/falcon/dasboard/to-do-list/falcon-dashboard-to-do-list/falcon-dashboard-to-do-list.component.html");
  }

}
