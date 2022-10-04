import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-product-details-cuatro',
  templateUrl: './falcon-product-details-cuatro.component.html',
  styleUrls: ['./falcon-product-details-cuatro.component.css']
})
export class FalconProductDetailsCuatroComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/e-commerce/productDetails_4/src/app/feature/falcon/e-commerce/falcon-product-details-cuatro/falcon-product-details-cuatro.component.html");
  }

}
