import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectReminderSeedsComponent } from './select-reminder-seeds.component';

describe('SelectReminderSeedsComponent', () => {
  let component: SelectReminderSeedsComponent;
  let fixture: ComponentFixture<SelectReminderSeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectReminderSeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectReminderSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
