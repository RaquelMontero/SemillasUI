import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeedInfoComponent } from './edit-seed-info.component';

describe('EditSeedInfoComponent', () => {
  let component: EditSeedInfoComponent;
  let fixture: ComponentFixture<EditSeedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSeedInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSeedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
