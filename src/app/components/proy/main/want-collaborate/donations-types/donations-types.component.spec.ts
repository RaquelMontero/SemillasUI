import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsTypesComponent } from './donations-types.component';

describe('DonationsTypesComponent', () => {
  let component: DonationsTypesComponent;
  let fixture: ComponentFixture<DonationsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
