import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weekly-agenda',
  templateUrl: './weekly-agenda.component.html',
  styleUrls: ['./weekly-agenda.component.scss']
})
export class WeeklyAgendaComponent implements OnInit {
  title = 'Weekly Agenda';

  constructor() { }

  ngOnInit(): void {
  }

}
