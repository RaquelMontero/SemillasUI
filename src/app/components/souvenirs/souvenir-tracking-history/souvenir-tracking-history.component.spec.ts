import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouvenirTrackingHistoryComponent } from './souvenir-tracking-history.component';

describe('SouvenirTrackingHistoryComponent', () => {
  let component: SouvenirTrackingHistoryComponent;
  let fixture: ComponentFixture<SouvenirTrackingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouvenirTrackingHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouvenirTrackingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
