import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-e-commerce-product-grid-detais',
  templateUrl: './falcon-e-commerce-product-grid-detais.component.html',
  styleUrls: ['./falcon-e-commerce-product-grid-detais.component.css']
})
export class FalconECommerceProductGridDetaisComponent implements OnInit {

  constructor(private codeService: CodeService) { }
  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/feature/falcon/e-commerce/product-grid-details/src/app/feature/falcon/e-commerce/falcon-e-commerce-product-grid-detais/falcon-e-commerce-product-grid-detais.component.html");
  }

}
