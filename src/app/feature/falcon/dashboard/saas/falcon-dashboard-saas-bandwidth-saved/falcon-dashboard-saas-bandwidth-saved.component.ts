import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-dashboard-saas-bandwidth-saved',
  templateUrl: './falcon-dashboard-saas-bandwidth-saved.component.html',
  styleUrls: ['./falcon-dashboard-saas-bandwidth-saved.component.css']
})
export class FalconDashboardSaasBANDWIDTHSAVEDComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/feature/falc%C3%B3n/saas/BANDWIDTH_SAVED/src/app/feature/falcon/dashboard/saas/falcon-dashboard-saas-bandwidth-saved/falcon-dashboard-saas-bandwidth-saved.component.html?token=GHSAT0AAAAAABZHUGZ6CERCFXMQQONGJI54YZ2U2NA");
  }

}
