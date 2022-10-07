import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-saas-conversion',
  templateUrl: './saas-conversion.component.html',
  styleUrls: ['./saas-conversion.component.css']
})
export class SaasConversionComponent implements OnInit {

  selectedMenu: number = 0;
  constructor(private codeService: CodeService) { }

  ngOnInit(): void {

    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/falcon/dasboard/saas-conversion/saas-conversion.component.html");
  }

  setActive(index: number){
    console.log(index);
    this.selectedMenu = index;
  }

}
