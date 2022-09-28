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
    this.codeService.sendCode("url del html de su componente pero en original");
  }

}
