import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllTrackingSeedsComponent } from './list-all-tracking-seeds.component';

describe('ListAllTrackingSeedsComponent', () => {
  let component: ListAllTrackingSeedsComponent;
  let fixture: ComponentFixture<ListAllTrackingSeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllTrackingSeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllTrackingSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
