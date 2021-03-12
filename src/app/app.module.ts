import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeeklyAgendaComponent } from './weekly-agenda/weekly-agenda.component';
import { DayToDoComponent } from './day-to-do/day-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    WeeklyAgendaComponent,
    DayToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
