import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-e-commerce-best-products',
  templateUrl: './falcon-e-commerce-best-products.component.html'
})
export class FalconECommerceBestProductsComponent implements OnInit {

  constructor(private codeService: CodeService) { }
  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/falcon/dasboard/e-commerce/falcon-e-commerce-best-products/falcon-e-commerce-best-products.component.html");
  }

}
