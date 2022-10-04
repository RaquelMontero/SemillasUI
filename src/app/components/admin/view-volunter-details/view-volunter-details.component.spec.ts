import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVolunterDetailsComponent } from './view-volunter-details.component';

describe('ViewVolunterDetailsComponent', () => {
  let component: ViewVolunterDetailsComponent;
  let fixture: ComponentFixture<ViewVolunterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVolunterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVolunterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
