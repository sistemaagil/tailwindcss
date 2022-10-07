import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-product-details-seis',
  templateUrl: './falcon-product-details-seis.component.html',
  styleUrls: ['./falcon-product-details-seis.component.css']
})
export class FalconProductDetailsSeisComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://github.com/sistemaagil/tailwindcss/blob/falcon/e-commerce/productDetails_6/src/app/feature/falcon/e-commerce/falcon-product-details-seis/falcon-product-details-seis.component.html");
  }

}
