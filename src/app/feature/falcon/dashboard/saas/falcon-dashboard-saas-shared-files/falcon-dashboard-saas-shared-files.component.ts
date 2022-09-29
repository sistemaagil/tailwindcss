import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-dashboard-saas-shared-files',
  templateUrl: './falcon-dashboard-saas-shared-files.component.html',
  styleUrls: ['./falcon-dashboard-saas-shared-files.component.css']
})
export class FalconDashboardSaasSHAREDFILESComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("url del html de su componente pero en original");
  }

}
