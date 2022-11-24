import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBenefitedSeedComponent } from './view-benefited-seed.component';

describe('ViewBenefitedSeedComponent', () => {
  let component: ViewBenefitedSeedComponent;
  let fixture: ComponentFixture<ViewBenefitedSeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBenefitedSeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBenefitedSeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
