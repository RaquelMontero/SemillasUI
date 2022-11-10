import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrackingVoluntersComponent } from './list-tracking-volunters.component';

describe('ListTrackingVoluntersComponent', () => {
  let component: ListTrackingVoluntersComponent;
  let fixture: ComponentFixture<ListTrackingVoluntersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrackingVoluntersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrackingVoluntersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
