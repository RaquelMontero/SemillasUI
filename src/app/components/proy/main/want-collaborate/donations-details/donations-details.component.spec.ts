import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsDetailsComponent } from './donations-details.component';

describe('DonationsDetailsComponent', () => {
  let component: DonationsDetailsComponent;
  let fixture: ComponentFixture<DonationsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
