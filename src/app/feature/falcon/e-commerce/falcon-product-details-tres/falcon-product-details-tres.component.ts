import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-product-details-tres',
  templateUrl: './falcon-product-details-tres.component.html',
  styleUrls: ['./falcon-product-details-tres.component.css']
})
export class FalconProductDetailsTresComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/e-commerce/productDetails_3/src/app/feature/falcon/e-commerce/falcon-product-details-tres/falcon-product-details-tres.component.html");
  }

}
