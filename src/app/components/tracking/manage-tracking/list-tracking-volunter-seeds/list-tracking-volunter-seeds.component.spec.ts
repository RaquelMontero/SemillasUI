import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrackingVolunterSeedsComponent } from './list-tracking-volunter-seeds.component';

describe('ListTrackingVolunterSeedsComponent', () => {
  let component: ListTrackingVolunterSeedsComponent;
  let fixture: ComponentFixture<ListTrackingVolunterSeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrackingVolunterSeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrackingVolunterSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
