import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyAgendaComponent } from './weekly-agenda.component';

describe('WeeklyAgendaComponent', () => {
  let component: WeeklyAgendaComponent;
  let fixture: ComponentFixture<WeeklyAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
