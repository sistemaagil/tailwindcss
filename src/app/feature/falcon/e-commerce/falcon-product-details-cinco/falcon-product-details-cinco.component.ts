import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-product-details-cinco',
  templateUrl: './falcon-product-details-cinco.component.html',
  styleUrls: ['./falcon-product-details-cinco.component.css']
})
export class FalconProductDetailsCincoComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/e-commerce/productDetails_5/src/app/feature/falcon/e-commerce/falcon-product-details-cinco/falcon-product-details-cinco.component.html");
  }

}
