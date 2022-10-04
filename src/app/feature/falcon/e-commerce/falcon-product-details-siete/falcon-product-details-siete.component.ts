import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-product-details-siete',
  templateUrl: './falcon-product-details-siete.component.html',
  styleUrls: ['./falcon-product-details-siete.component.css']
})
export class FalconProductDetailsSieteComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/e-commerce/productDetails_7/src/app/feature/falcon/e-commerce/falcon-product-details-siete/falcon-product-details-siete.component.html");
  }

}
