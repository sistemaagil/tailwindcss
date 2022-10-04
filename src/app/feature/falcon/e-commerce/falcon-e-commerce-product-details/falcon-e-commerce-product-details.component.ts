import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-e-commerce-product-details',
  templateUrl: './falcon-e-commerce-product-details.component.html',
  styleUrls: ['./falcon-e-commerce-product-details.component.css']
})
export class FalconECommerceProductDetailsComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/feature/falcon/e-commerce/product_details/src/app/feature/falcon/e-commerce/falcon-e-commerce-product-details/falcon-e-commerce-product-details.component.html");
  }

}
