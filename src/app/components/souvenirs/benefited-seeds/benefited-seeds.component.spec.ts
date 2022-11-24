import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitedSeedsComponent } from './benefited-seeds.component';

describe('BenefitedSeedsComponent', () => {
  let component: BenefitedSeedsComponent;
  let fixture: ComponentFixture<BenefitedSeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitedSeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenefitedSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
