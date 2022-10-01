import { Component, OnInit } from '@angular/core';
import { CodeService } from '../feature/code.service';

@Component({
  selector: 'app-falcon-management-orders',
  templateUrl: './falcon-management-orders.component.html',
  styleUrls: ['./falcon-management-orders.component.css']
})
export class FalconManagementOrdersComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/feature/falcon/Management-Orders/src/app/layout/sidebar/sidebar.component.html");
  }

}
