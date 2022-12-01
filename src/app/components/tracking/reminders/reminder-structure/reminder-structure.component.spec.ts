import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderStructureComponent } from './reminder-structure.component';

describe('ReminderStructureComponent', () => {
  let component: ReminderStructureComponent;
  let fixture: ComponentFixture<ReminderStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReminderStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
