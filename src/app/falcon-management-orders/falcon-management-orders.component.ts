import { Component, OnInit } from '@angular/core';
import { CodeService } from '../feature/code.service';

@Component({
  selector: 'app-falcon-management-orders',
  templateUrl: './falcon-management-orders.component.html',
  styleUrls: ['./falcon-management-orders.component.css']
})
export class FalconManagementOrdersComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {    this.codeService.sendCode("url del html de su componente pero en original");
  }

}
