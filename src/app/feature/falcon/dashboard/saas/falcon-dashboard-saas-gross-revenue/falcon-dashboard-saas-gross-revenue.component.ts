import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-dashboard-saas-gross-revenue',
  templateUrl: './falcon-dashboard-saas-gross-revenue.component.html',
  styleUrls: ['./falcon-dashboard-saas-gross-revenue.component.css']
})
export class FalconDashboardSaasGrossRevenueComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("url del html de su componente pero en original");
  }

}
