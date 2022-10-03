import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-app-event-create-event',
  templateUrl: './falcon-app-event-create-event.component.html',
  styleUrls: ['./falcon-app-event-create-event.component.css']
})
export class FalconAppEventCreateEventComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {this.codeService.sendCode("url del html de su componente pero en original");
  }

}
