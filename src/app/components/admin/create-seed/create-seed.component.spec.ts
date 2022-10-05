import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSeedComponent } from './create-seed.component';

describe('CreateSeedComponent', () => {
  let component: CreateSeedComponent;
  let fixture: ComponentFixture<CreateSeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
