import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllDonationsComponent } from './list-all-donations.component';

describe('ListAllDonationsComponent', () => {
  let component: ListAllDonationsComponent;
  let fixture: ComponentFixture<ListAllDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllDonationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
