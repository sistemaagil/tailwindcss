import { Component, OnInit } from '@angular/core';
import { CodeService } from 'src/app/feature/code.service';

@Component({
  selector: 'app-events-may-you-like',
  templateUrl: './events-may-you-like.component.html',
  styleUrls: ['./events-may-you-like.component.css']
})
export class EventsMayYouLikeComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    
    this.codeService.sendCode("https://raw.githubusercontent.com/sistemaagil/tailwindcss/falcon/event-detail/events-you-make-like/src/app/feature/falcon/events/events-details/events-like/events-may-you-like/events-may-you-like.component.html");
  }
}
