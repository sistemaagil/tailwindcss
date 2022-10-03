import { Component, OnInit } from '@angular/core';
import { CodeService } from '../../code.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { getLocaleTimeFormat } from '@angular/common';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public events: any[] | undefined;
  public options: any;

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {

    this.options ={

      plugins: [dayGridPlugin,timeGridPlugin,interactionPlugin],
      defaultDate: new Date (),

      header:{
        left: 'prev,next',
        center: 'title',
        right : 'month,dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: false
    }



    this.events=[
      {
        title:"Evento 1",
        start:new Date(),
        description: "Evento 1"
      },
      {
        title:"Evento 2",
        start:new Date( new Date().getTime()+86400000),
        description: "Evento 2"
      },
      {
        title:"Cena",
        start:new Date(new Date().getTime()+(86400000 * 2)),
        end:new Date(new Date().getTime()+(86400000 * 3)),
        description: "Evento 3",
        display: 'background',
        color: 'yellow',
        textColor: 'black'
      },
      {
        title:"Ir a comer",
        start: '2022-06-05T08:00:00',
        end:'2022-06-05T09:00:00',
        description: "Evento 2"

      },
      {
        title:"tutorias",
        start:'2022-10-06T16:00:00',
        end:'2022-10-07T17:00:00'


      },
    ],


    this.codeService.sendCode("");
  }

}
