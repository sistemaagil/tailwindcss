import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-product-details-ocho',
  templateUrl: './falcon-product-details-ocho.component.html',
  styleUrls: ['./falcon-product-details-ocho.component.css']
})
export class FalconProductDetailsOchoComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/e-commerce/productDetails_8/src/app/feature/falcon/e-commerce/falcon-product-details-ocho/falcon-product-details-ocho.component.html");
  }

}
