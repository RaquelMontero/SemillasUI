import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouvenirTrackindDialogComponent } from './souvenir-trackind-dialog.component';

describe('SouvenirTrackindDialogComponent', () => {
  let component: SouvenirTrackindDialogComponent;
  let fixture: ComponentFixture<SouvenirTrackindDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouvenirTrackindDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouvenirTrackindDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
