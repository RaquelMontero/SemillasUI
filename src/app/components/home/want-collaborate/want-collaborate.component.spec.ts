import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantCollaborateComponent } from './want-collaborate.component';

describe('WantCollaborateComponent', () => {
  let component: WantCollaborateComponent;
  let fixture: ComponentFixture<WantCollaborateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantCollaborateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantCollaborateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
