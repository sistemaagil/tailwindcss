import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-dashboard-saas-morewith-falcon',
  templateUrl: './falcon-dashboard-saas-morewith-falcon.component.html',
  styleUrls: ['./falcon-dashboard-saas-morewith-falcon.component.css']
})
export class FalconDashboardSaasMOREWITHFALCONComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("url del html de su componente pero en original");
  }

}
