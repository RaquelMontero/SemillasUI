import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitedSeedDialogComponent } from './benefited-seed-dialog.component';

describe('DialogBenefitedSeedComponent', () => {
  let component: BenefitedSeedDialogComponent;
  let fixture: ComponentFixture<BenefitedSeedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitedSeedDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenefitedSeedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
