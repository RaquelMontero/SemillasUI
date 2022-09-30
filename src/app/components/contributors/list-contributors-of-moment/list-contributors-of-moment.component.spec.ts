import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContributorsOfMomentComponent } from './list-contributors-of-moment.component';

describe('ListContributorsOfMomentComponent', () => {
  let component: ListContributorsOfMomentComponent;
  let fixture: ComponentFixture<ListContributorsOfMomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContributorsOfMomentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContributorsOfMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
