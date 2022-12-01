import { TestBed } from '@angular/core/testing';

import { TranslateListenerService } from './translate-listener.service';

describe('TranslateListenerService', () => {
  let service: TranslateListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
