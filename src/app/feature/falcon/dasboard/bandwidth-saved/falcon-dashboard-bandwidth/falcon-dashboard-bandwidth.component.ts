import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-falcon-dashboard-bandwidth',
  templateUrl: './falcon-dashboard-bandwidth.component.html',
  styleUrls: ['./falcon-dashboard-bandwidth.component.css']
})
export class FalconDashboardBandwidthComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeService.sendCode("");
  }

}
