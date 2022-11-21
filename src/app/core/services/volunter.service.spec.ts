import { TestBed } from '@angular/core/testing';

import { VolunterService } from './volunter.service';

describe('VolunterService', () => {
  let service: VolunterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolunterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
