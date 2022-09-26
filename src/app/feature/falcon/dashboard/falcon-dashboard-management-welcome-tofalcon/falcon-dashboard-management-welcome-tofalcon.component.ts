import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-dashboard-management-welcome-tofalcon',
  templateUrl: './falcon-dashboard-management-welcome-tofalcon.component.html',
  styleUrls: ['./falcon-dashboard-management-welcome-tofalcon.component.css']
})
export class FalconDashboardManagementWELCOMETOFALCONComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/develop/src/app/feature/falcon/dashboard/falcon-dashboard-management-welcome-tofalcon/falcon-dashboard-management-welcome-tofalcon.component.html");
  }

}
