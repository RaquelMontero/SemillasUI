import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVoluntersComponent } from './list-volunters.component';

describe('ListVoluntersComponent', () => {
  let component: ListVoluntersComponent;
  let fixture: ComponentFixture<ListVoluntersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVoluntersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVoluntersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
