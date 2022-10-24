import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewDonationComponent } from './modal-new-donation.component';

describe('ModalNewDonationComponent', () => {
  let component: ModalNewDonationComponent;
  let fixture: ComponentFixture<ModalNewDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNewDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNewDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
