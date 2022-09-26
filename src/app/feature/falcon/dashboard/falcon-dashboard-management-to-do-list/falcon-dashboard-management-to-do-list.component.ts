import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-dashboard-management-to-do-list',
  templateUrl: './falcon-dashboard-management-to-do-list.component.html',
  styleUrls: ['./falcon-dashboard-management-to-do-list.component.css']
})
export class FalconDashboardManagementTODOLISTComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/develop/src/app/feature/falcon/dashboard/falcon-dashboard-management-to-do-list/falcon-dashboard-management-to-do-list.component.html");
  }

}
