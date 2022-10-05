import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-product-details-cinco-cinco',
  templateUrl: './falcon-product-details-cinco-cinco.component.html',
  styleUrls: ['./falcon-product-details-cinco-cinco.component.css']
})
export class FalconProductDetailsCINCOCINCOComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/feature/falcon/e-commerce/productDetails_cinco/src/app/feature/falcon/e-commerce/falcon-product-details-cinco-cinco/falcon-product-details-cinco-cinco.component.html");
  }

}
