import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayToDoComponent } from './day-to-do.component';

describe('DayToDoComponent', () => {
  let component: DayToDoComponent;
  let fixture: ComponentFixture<DayToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
