import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-e-commerce-good-afternon',
  templateUrl: './e-commerce-good-afternon.component.html',
})
export class ECommerceGoodAfternonComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://gitea.sistemaagil.net/Tailwindcss/tailwindcss-frontend/raw/branch/falcon/Good-afternon/src/app/feature/falcon/dasboard/e-commerce-good-afternon/e-commerce-good-afternon.component.html");
  }

}
