import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-product-details-nueve',
  templateUrl: './falcon-product-details-nueve.component.html',
  styleUrls: ['./falcon-product-details-nueve.component.css']
})
export class FalconProductDetailsNueveComponent implements OnInit {

  constructor(private codeService: CodeService) { }
  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/e-commerce/productDetails_9/src/app/feature/falcon/e-commerce/falcon-product-details-nueve/falcon-product-details-nueve.component.html");
  }

}
