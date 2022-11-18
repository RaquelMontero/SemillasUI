import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnactiveVolunteersComponent } from './unactive-volunteers.component';

describe('UnactiveVolunteersComponent', () => {
  let component: UnactiveVolunteersComponent;
  let fixture: ComponentFixture<UnactiveVolunteersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnactiveVolunteersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnactiveVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
