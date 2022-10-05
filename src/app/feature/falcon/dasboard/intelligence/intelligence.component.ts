import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';


@Component({
  selector: 'app-intelligence',
  templateUrl: './intelligence.component.html',
  styleUrls: ['./intelligence.component.css']
})
export class IntelligenceComponent implements OnInit {
  activeTabNumber: number = 0;
  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/falcon/dasboard/intelligence/intelligence.component.html");
  }
  setActiveClass (id:number ):void {
    this.activeTabNumber = id;
  }
}
