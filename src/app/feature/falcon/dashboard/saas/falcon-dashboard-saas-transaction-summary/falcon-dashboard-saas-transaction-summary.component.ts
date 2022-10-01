import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-dashboard-saas-transaction-summary',
  templateUrl: './falcon-dashboard-saas-transaction-summary.component.html',
  styleUrls: ['./falcon-dashboard-saas-transaction-summary.component.css']
})
export class FalconDashboardSaasTRANSACTIONSUMMARYComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("url del html de su componente pero en original");
  }

}
