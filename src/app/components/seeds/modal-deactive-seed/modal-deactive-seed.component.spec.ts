import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeactiveSeedComponent } from './modal-deactive-seed.component';

describe('ModalDeactiveSeedComponent', () => {
  let component: ModalDeactiveSeedComponent;
  let fixture: ComponentFixture<ModalDeactiveSeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeactiveSeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeactiveSeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
