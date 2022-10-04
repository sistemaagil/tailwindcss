import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-e-commerce-product-details-dos',
  templateUrl: './falcon-e-commerce-product-details-dos.component.html',
  styleUrls: ['./falcon-e-commerce-product-details-dos.component.css']
})
export class FalconECommerceProductDetailsDosComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/e-commerce/productDetails_2/src/app/feature/falcon/e-commerce/falcon-e-commerce-product-details-dos/falcon-e-commerce-product-details-dos.component.html");
  }

}
