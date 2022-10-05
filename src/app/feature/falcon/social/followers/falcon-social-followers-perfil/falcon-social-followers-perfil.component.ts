import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-social-followers-perfil',
  templateUrl: './falcon-social-followers-perfil.component.html'
})
export class FalconSocialFollowersPerfilComponent implements OnInit {

  constructor(private codeService: CodeService) { }
  ngOnInit(): void {
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/develop/src/app/feature/falcon/social/followers/falcon-social-followers-perfil/falcon-social-followers-perfil.component.html");
  }

}
