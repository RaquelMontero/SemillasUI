import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignSeedToVolunterComponent } from './asign-seed-to-volunter.component';

describe('AsignSeedToVolunterComponent', () => {
  let component: AsignSeedToVolunterComponent;
  let fixture: ComponentFixture<AsignSeedToVolunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignSeedToVolunterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignSeedToVolunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
